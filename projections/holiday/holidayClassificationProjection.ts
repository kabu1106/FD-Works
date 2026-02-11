import { OvertimeSlot } from "@/projections/overtime/overTime";
import { HolidayCalendar } from "./holidayCalendar";

export interface HolidayClassifiedSlot {
  dutyId: string;
  staffId: number;
  startAt: string;
  endAt: string;
  isHoliday: boolean;
  isWeeklyOff: boolean;
}

export class HolidayClassificationProjection {
  constructor(private readonly calendar: HolidayCalendar) {}

  classify(slots: OvertimeSlot[]): HolidayClassifiedSlot[] {
    const results: HolidayClassifiedSlot[] = [];

    for (const slot of slots) {
      const parts = this.splitByDateBoundary(slot.startAt, slot.endAt);

      for (const part of parts) {
        const date = new Date(part.startAt);

        results.push({
          dutyId: slot.dutyId,
          staffId: slot.staffId,
          startAt: part.startAt,
          endAt: part.endAt,
          isHoliday: this.calendar.isHoliday(date),
          isWeeklyOff: this.calendar.isWeeklyOff(date),
        });
      }
    }

    return results;
  }

  private splitByDateBoundary(startAt: string, endAt: string) {
    const result: { startAt: string; endAt: string }[] = [];

    let cursor = new Date(startAt);
    const end = new Date(endAt);

    while (cursor < end) {
      const nextMidnight = new Date(cursor);
      nextMidnight.setUTCHours(24, 0, 0, 0);

      const segmentEnd =
        nextMidnight < end ? nextMidnight : end;

      result.push({
        startAt: cursor.toISOString(),
        endAt: segmentEnd.toISOString(),
      });

      cursor = segmentEnd;
    }

    return result;
  }
}
