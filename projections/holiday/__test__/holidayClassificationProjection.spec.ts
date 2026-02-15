import { describe, it, expect, vi, beforeEach } from "vitest";
import { HolidayClassificationProjection } from "../holidayClassificationProjection";
import type { OvertimeSlot } from "@/projections/overtime/overTime";
import type { HolidayCalendar } from "../holidayCalendar";

describe("HolidayClassificationProjection", () => {
  let calendarMock: HolidayCalendar;
  let projection: HolidayClassificationProjection;

  beforeEach(() => {
    calendarMock = {
      isHoliday: vi.fn(),
      isWeeklyOff: vi.fn(),
    } as unknown as HolidayCalendar;

    projection = new HolidayClassificationProjection(calendarMock);
  });

  it("should classify a slot within same day", () => {
    const slot: OvertimeSlot = {
      dutyId: "D1",
      staffId: 1,
      startAt: "2024-01-01T10:00:00.000Z",
      endAt: "2024-01-01T18:00:00.000Z",
    };

    (calendarMock.isHoliday as any).mockReturnValue(true);
    (calendarMock.isWeeklyOff as any).mockReturnValue(false);

    const result = projection.classify([slot]);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      dutyId: "D1",
      staffId: 1,
      startAt: "2024-01-01T10:00:00.000Z",
      endAt: "2024-01-01T18:00:00.000Z",
      isHoliday: true,
      isWeeklyOff: false,
    });

    expect(calendarMock.isHoliday).toHaveBeenCalledTimes(1);
    expect(calendarMock.isWeeklyOff).toHaveBeenCalledTimes(1);
  });

  it("should split slot across midnight", () => {
    const slot: OvertimeSlot = {
      dutyId: "D2",
      staffId: 2,
      startAt: "2024-01-01T22:00:00.000Z",
      endAt: "2024-01-02T02:00:00.000Z",
    };

    (calendarMock.isHoliday as any)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    (calendarMock.isWeeklyOff as any)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const result = projection.classify([slot]);

    expect(result).toHaveLength(2);

    expect(result[0]).toEqual({
      dutyId: "D2",
      staffId: 2,
      startAt: "2024-01-01T22:00:00.000Z",
      endAt: "2024-01-02T00:00:00.000Z",
      isHoliday: true,
      isWeeklyOff: false,
    });

    expect(result[1]).toEqual({
      dutyId: "D2",
      staffId: 2,
      startAt: "2024-01-02T00:00:00.000Z",
      endAt: "2024-01-02T02:00:00.000Z",
      isHoliday: false,
      isWeeklyOff: true,
    });

    expect(calendarMock.isHoliday).toHaveBeenCalledTimes(2);
    expect(calendarMock.isWeeklyOff).toHaveBeenCalledTimes(2);
  });

  it("should return empty when no slots", () => {
    const result = projection.classify([]);
    expect(result).toEqual([]);
  });

  it("should handle slot ending exactly at midnight", () => {
    const slot: OvertimeSlot = {
      dutyId: "D3",
      staffId: 3,
      startAt: "2024-01-01T20:00:00.000Z",
      endAt: "2024-01-02T00:00:00.000Z",
    };

    (calendarMock.isHoliday as any).mockReturnValue(true);
    (calendarMock.isWeeklyOff as any).mockReturnValue(false);

    const result = projection.classify([slot]);

    expect(result).toHaveLength(1);

    expect(result[0].startAt).toBe("2024-01-01T20:00:00.000Z");
    expect(result[0].endAt).toBe("2024-01-02T00:00:00.000Z");
  });
});
