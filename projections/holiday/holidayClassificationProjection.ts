import { OvertimeSlot } from "@/projections/overtime/overTime";
import { HolidayCalendar } from "./holidayCalendar";
import { splitByDateBoundary } from "@/projections/shared/splitByDateBoundary";

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
      const parts = splitByDateBoundary(slot.startAt, slot.endAt);

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
}
