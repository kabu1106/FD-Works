// src/__tests__/projection/overtime/OvertimeRateClassificationProjection.test.ts

import { describe, it, expect } from "vitest";
import { OvertimeRateClassificationProjection } from "@/projections/overtime/overtimeRateClassificationProjection";
import { HolidayClassifiedSlot } from "@/projections/holiday/holidayClassificationProjection";

describe("OvertimeRateClassificationProjection", () => {
  const projection = new OvertimeRateClassificationProjection();

  // =========================================
  // ① 通常時間帯（5:00-22:00） → 1.25
  // =========================================
  it("should apply 1.25 rate during normal overtime hours", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-10T10:00:00.000Z",
        endAt: "2026-02-10T12:00:00.000Z",
        isHoliday: false,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result).toHaveLength(1);
    expect(result[0].rate).toBe(1.25);
  });

  // =========================================
  // ② 深夜時間帯（22:00-5:00） → 1.5
  // =========================================
  it("should apply 1.5 rate during night overtime hours", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-10T23:00:00.000Z",
        endAt: "2026-02-11T01:00:00.000Z",
        isHoliday: false,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result).toHaveLength(1);
    expect(result[0].rate).toBe(1.5);
  });

  // =========================================
  // ③ 祝日加算（通常時間帯） → 1.35
  // =========================================
  it("should apply +10% on holiday during normal hours (1.35)", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-11T10:00:00.000Z",
        endAt: "2026-02-11T12:00:00.000Z",
        isHoliday: true,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result[0].rate).toBe(1.35);
  });

  // =========================================
  // ④ 祝日加算（深夜） → 1.6
  // =========================================
  it("should apply +10% on holiday during night hours (1.6)", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-11T23:00:00.000Z",
        endAt: "2026-02-12T01:00:00.000Z",
        isHoliday: true,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result[0].rate).toBe(1.6);
  });

  // =========================================
  // ⑤ 22:00境界で正しく分割されること
  // =========================================
  it("should split at 22:00 boundary", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-10T21:00:00.000Z",
        endAt: "2026-02-10T23:00:00.000Z",
        isHoliday: false,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result).toHaveLength(2);

    expect(result[0].rate).toBe(1.25); // 21-22
    expect(result[1].rate).toBe(1.5);  // 22-23
  });

  // =========================================
  // ⑥ 5:00境界で正しく分割されること
  // =========================================
  it("should split at 5:00 boundary", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-11T04:00:00.000Z",
        endAt: "2026-02-11T06:00:00.000Z",
        isHoliday: false,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result).toHaveLength(2);

    expect(result[0].rate).toBe(1.5);  // 4-5
    expect(result[1].rate).toBe(1.25); // 5-6
  });

  // =========================================
  // ⑦ 日付跨ぎケース（23:00-25:00）
  // 2026-02-11のみ祝日と仮定
  // → 23:00-24:00 = 1.6
  // → 00:00-01:00 = 1.5
  // =========================================
  it("should correctly classify cross-date holiday night case", () => {
    const input: HolidayClassifiedSlot[] = [
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-11T23:00:00.000Z",
        endAt: "2026-02-12T01:00:00.000Z",
        isHoliday: true,  // HolidayClassificationProjectionで分割済前提
        isWeeklyOff: false,
      },
      {
        dutyId: "d1",
        staffId: 1,
        startAt: "2026-02-12T00:00:00.000Z",
        endAt: "2026-02-12T01:00:00.000Z",
        isHoliday: false,
        isWeeklyOff: false,
      },
    ];

    const result = projection.classify(input);

    expect(result[0].rate).toBe(1.6); // holiday night
    expect(result[1].rate).toBe(1.5); // normal night
  });
});
