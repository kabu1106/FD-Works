import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { splitByDateBoundary } from "@/projections/shared/splitByDateBoundary";

describe("splitByDateBoundary Property Test", () => {
  const MIN = Date.parse("2023-01-01T00:00:00.000Z");
  const MAX = Date.parse("2025-12-30T00:00:00.000Z");

  const startMillisArb = fc.integer({ min: MIN, max: MAX });
  const durationHoursArb = fc.integer({ min: 1, max: 72 });

  it("should preserve invariants", () => {
    fc.assert(
      fc.property(startMillisArb, durationHoursArb, (startMs, hours) => {
        const start = new Date(startMs - (startMs % 3600000));
        const end = new Date(start.getTime() + hours * 3600000);

        const segments = splitByDateBoundary(
          start.toISOString(),
          end.toISOString()
        );

        expect(segments[0].startAt).toBe(start.toISOString());
        expect(segments.at(-1)!.endAt).toBe(end.toISOString());

        for (let i = 1; i < segments.length; i++) {
          expect(segments[i - 1].endAt).toBe(segments[i].startAt);
        }

        const totalDuration = segments.reduce((acc, seg) => {
          return (
            acc +
            (new Date(seg.endAt).getTime() -
              new Date(seg.startAt).getTime())
          );
        }, 0);

        expect(totalDuration).toBe(end.getTime() - start.getTime());

        for (const seg of segments) {
          const s = new Date(seg.startAt);
          const e = new Date(seg.endAt);

          const sameDate =
            s.getUTCFullYear() === e.getUTCFullYear() &&
            s.getUTCMonth() === e.getUTCMonth() &&
            s.getUTCDate() === e.getUTCDate();

          const endsAtMidnight =
            e.getUTCHours() === 0 &&
            e.getUTCMinutes() === 0 &&
            e.getUTCSeconds() === 0 &&
            e.getUTCMilliseconds() === 0;

          expect(sameDate || endsAtMidnight).toBe(true);
        }
      }),
      { numRuns: 500 }
    );
  });
});
