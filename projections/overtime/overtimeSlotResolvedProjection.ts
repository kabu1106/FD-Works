// src/projection/overtime/OvertimeSlotResolvedProjection.ts
import { AttendanceTimelineSlot } from "@/domain/attendance/attendanceTimelineSlot";
import { OvertimeSlot } from "./overTime";


export type DutyDayType = "DUTY24" | "DAYSHIFT";

export interface WorkGroupSleepWindow {
  startAt: string;
  endAt: string;
}

export class OvertimeSlotResolvedProjection {
  private overtimeSlots: OvertimeSlot[] = [];

  resolve(
    slots: AttendanceTimelineSlot[],
    dutyDate: string,
    dutyType: DutyDayType,
    sleepWindow?: WorkGroupSleepWindow
  ): OvertimeSlot[] {
    this.overtimeSlots = [];

    const scheduled = this.getScheduledWindow(dutyDate, dutyType);

    for (const slot of slots) {
      if (slot.type === "break") continue;
      if (!slot.endAt) continue;

      const overtimeRanges = this.extractOutsideRange(
        slot.startAt,
        slot.endAt,
        scheduled.start,
        scheduled.end
      );

      for (const range of overtimeRanges) {
        this.overtimeSlots.push({
          dutyId: slot.dutyId,
          staffId: slot.staffId,
          startAt: range.start,
          endAt: range.end,
        });
      }

      // DUTY24の場合は仮眠時間も除外
      if (dutyType === "DUTY24" && sleepWindow) {
        this.removeSleepOverlap(slot, sleepWindow);
      }
    }

    return this.overtimeSlots;
  }

  reset() {
    this.overtimeSlots = [];
  }

  // =====================
  // 内部ロジック
  // =====================

  private getScheduledWindow(dutyDate: string, dutyType: DutyDayType) {
    const base = new Date(`${dutyDate}T08:30:00`);

    if (dutyType === "DAYSHIFT") {
      const end = new Date(`${dutyDate}T17:15:00`);
      return { start: base, end };
    }

    // DUTY24
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
        end: new Date(Math.min(end.getTime(), scheduledStart.getTime())).toISOString(),
      });
    }

    if (end > scheduledEnd) {
      ranges.push({
        start: new Date(Math.max(start.getTime(), scheduledEnd.getTime())).toISOString(),
        end: end.toISOString(),
      });
    }

    return ranges;
  }

  private removeSleepOverlap(
    slot: AttendanceTimelineSlot,
    sleep: WorkGroupSleepWindow
  ) {
    const sleepStart = new Date(sleep.startAt);
    const sleepEnd = new Date(sleep.endAt);

    this.overtimeSlots = this.overtimeSlots.filter((o) => {
      const oStart = new Date(o.startAt);
      const oEnd = new Date(o.endAt);

      const overlap =
        oStart < sleepEnd && oEnd > sleepStart;

      return !overlap;
    });
  }
}
