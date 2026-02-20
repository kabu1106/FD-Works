import { describe, it, expect, vi } from "vitest";
import fc from "fast-check";
import { HolidayClassificationProjection } from "../../../../../projections/holiday/holidayClassificationProjection";
import type { OvertimeSlot } from "@/projections/overtime/overTime";
import type { HolidayCalendar } from "../../../../../projections/holiday/holidayCalendar";

describe("HolidayClassificationProjection Property Test", () => {
  const calendarMock: HolidayCalendar = {
    isHoliday: vi.fn().mockReturnValue(false),
    isWeeklyOff: vi.fn().mockReturnValue(false),
  } as unknown as HolidayCalendar;

  const projection = new HolidayClassificationProjection(calendarMock);

  const MIN = Date.parse("2023-01-01T00:00:00.000Z");
  const MAX = Date.parse("2025-12-30T00:00:00.000Z");

  const startMillisArbitrary = fc.integer({
    min: MIN,
    max: MAX,
  });

  const durationHoursArbitrary = fc.integer({
    min: 1,
    max: 72,
  });

  it("should preserve invariants when splitting slots", () => {
    fc.assert(
      fc.property(startMillisArbitrary, durationHoursArbitrary, (startMs, hours) => {
        const startAt = new Date(startMs - (startMs % 3600000)); // align to hour
        const endAt = new Date(startAt.getTime() + hours * 3600000);

        const slot: OvertimeSlot = {
          dutyId: "D",
          staffId: 1,
          startAt: startAt.toISOString(),
          endAt: endAt.toISOString(),
        };

        const result = projection.classify([slot]);

        expect(result.length).toBeGreaterThan(0);

        expect(result[0].startAt).toBe(slot.startAt);
        expect(result[result.length - 1].endAt).toBe(slot.endAt);

        for (let i = 1; i < result.length; i++) {
          expect(result[i - 1].endAt).toBe(result[i].startAt);
        }

        for (const seg of result) {
            const s = new Date(seg.startAt);
            const e = new Date(seg.endAt);
          
            expect(s.getTime()).toBeLessThan(e.getTime());
          
            const sameUTCDate =
              s.getUTCFullYear() === e.getUTCFullYear() &&
              s.getUTCMonth() === e.getUTCMonth() &&
              s.getUTCDate() === e.getUTCDate();
          
            const endsAtMidnight =
              e.getUTCHours() === 0 &&
              e.getUTCMinutes() === 0 &&
              e.getUTCSeconds() === 0 &&
              e.getUTCMilliseconds() === 0;
          
            expect(sameUTCDate || endsAtMidnight).toBe(true);
          }
          

        const originalDuration = endAt.getTime() - startAt.getTime();
        const splitDuration = result.reduce((acc, seg) => {
          return acc + (new Date(seg.endAt).getTime() - new Date(seg.startAt).getTime());
        }, 0);

        expect(splitDuration).toBe(originalDuration);
      }),
      { numRuns: 500 }
    );
  });
});
