import { HolidayClassifiedSlot } from "@/projections/holiday/holidayClassificationProjection";
import { OvertimeRateSlot } from "./overTime";

export class OvertimeRateClassificationProjection {
  classify(slots: HolidayClassifiedSlot[]): OvertimeRateSlot[] {
    const results: OvertimeRateSlot[] = [];

    for (const slot of slots) {
      const parts = this.splitByNightBoundary(slot.startAt, slot.endAt);

      for (const part of parts) {
        const rate = this.resolveRate(
          part.startAt,
          slot.isHoliday || slot.isWeeklyOff
        );

        results.push({
          dutyId: slot.dutyId,
          staffId: slot.staffId,
          startAt: part.startAt,
          endAt: part.endAt,
          rate,
        });
      }
    }

    return results;
  }

  private resolveRate(startAt: string, isHolidayOrWeeklyOff: boolean): number {
    const date = new Date(startAt);
    const hour = date.getUTCHours();

    const isNight = hour >= 22 || hour < 5;

    let baseRate = isNight ? 1.5 : 1.25;

    if (isHolidayOrWeeklyOff) {
      baseRate += 0.10;
    }

    return baseRate;
  }

  private splitByNightBoundary(startAt: string, endAt: string) {
    const results: { startAt: string; endAt: string }[] = [];

    let cursor = new Date(startAt);
    const end = new Date(endAt);

    while (cursor < end) {
      const nextBoundary = this.nextNightBoundary(cursor);

      const segmentEnd =
        nextBoundary < end ? nextBoundary : end;

      results.push({
        startAt: cursor.toISOString(),
        endAt: segmentEnd.toISOString(),
      });

      cursor = segmentEnd;
    }

    return results;
  }

  private nextNightBoundary(date: Date): Date {
    const d = new Date(date);

    if (d.getUTCHours() < 5) {
      d.setUTCHours(5, 0, 0, 0);
    } else if (d.getUTCHours() < 22) {
      d.setUTCHours(22, 0, 0, 0);
    } else {
      d.setUTCDate(d.getUTCDate() + 1);
      d.setUTCHours(5, 0, 0, 0);
    }

    return d;
  }
}
