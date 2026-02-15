// src/projection/overtime/OvertimeSlotResolvedProjection.ts
import { AttendanceTimelineSlot } from "@/domain/attendance/attendanceTimelineSlot";
import { OvertimeSlot } from "./overTime";

export type DutyDayType = "DUTY24" | "DAYSHIFT";

export interface WorkGroupSleepWindow {
  startAt: string;
  endAt: string;
}

export class OvertimeSlotResolvedProjection {
  resolve(
    slots: AttendanceTimelineSlot[],
    dutyDate: string,
    dutyType: DutyDayType,
    sleepWindow?: WorkGroupSleepWindow
  ): OvertimeSlot[] {
    const overtimeSlots: OvertimeSlot[] = [];
    const scheduled = this.getScheduledWindow(dutyDate, dutyType);

    for (const slot of slots) {
      if (slot.type === "break") continue;
      if (!slot.endAt) continue;

      // ① 所定時間外
      const outsideScheduled = this.extractOutsideRange(
        slot.startAt,
        slot.endAt,
        scheduled.start,
        scheduled.end
      );

      // ② 仮眠時間（DUTY24のみ）
      const sleepRanges =
        dutyType === "DUTY24" && sleepWindow
          ? this.extractOverlapRange(
              slot.startAt,
              slot.endAt,
              new Date(sleepWindow.startAt),
              new Date(sleepWindow.endAt)
            )
          : [];

      const allRanges = [...outsideScheduled, ...sleepRanges];

      for (const range of allRanges) {
        overtimeSlots.push({
          dutyId: slot.dutyId,
          staffId: slot.staffId,
          startAt: range.start,
          endAt: range.end,
        });
      }
    }

    return overtimeSlots;
  }

  // =====================
  // 内部ロジック
  // =====================

  private getScheduledWindow(dutyDate: string, dutyType: DutyDayType) {
    const base = new Date(`${dutyDate}T08:30:00.000Z`);
  
    if (dutyType === "DAYSHIFT") {
      const end = new Date(`${dutyDate}T17:15:00.000Z`);
      return { start: base, end };
    }
  
    const end = new Date(base.getTime() + 24 * 60 * 60 * 1000);
    return { start: base, end };
  }

  private extractOutsideRange(
    startAt: string,
    endAt: string,
    scheduledStart: Date,
    scheduledEnd: Date
  ) {
    const start = new Date(startAt);
    const end = new Date(endAt);

    const ranges: { start: string; end: string }[] = [];

    if (start < scheduledStart) {
      ranges.push({
        start: start.toISOString(),
        end: new Date(
          Math.min(end.getTime(), scheduledStart.getTime())
        ).toISOString(),
      });
    }

    if (end > scheduledEnd) {
      ranges.push({
        start: new Date(
          Math.max(start.getTime(), scheduledEnd.getTime())
        ).toISOString(),
        end: end.toISOString(),
      });
    }

    return ranges;
  }

  private extractOverlapRange(
    startAt: string,
    endAt: string,
    windowStart: Date,
    windowEnd: Date
  ) {
    const start = new Date(startAt);
    const end = new Date(endAt);

    const overlapStart = new Date(
      Math.max(start.getTime(), windowStart.getTime())
    );
    const overlapEnd = new Date(
      Math.min(end.getTime(), windowEnd.getTime())
    );

    if (overlapStart < overlapEnd) {
      return [
        {
          start: overlapStart.toISOString(),
          end: overlapEnd.toISOString(),
        },
      ];
    }

    return [];
  }
}
