// tests/projection/overtime/OvertimeSlotResolvedProjection.test.ts

import { describe, it, expect } from "vitest";
import { OvertimeSlotResolvedProjection } from "@/projections/overtime/overtimeSlotResolvedProjection";

interface TestSlot {
  dutyId: string;
  staffId: string;
  type: string;
  startAt: string;
  endAt?: string;
}

const DUTY_DATE = "2024-01-01";
const BASE = "2024-01-01T08:30:00.000Z";
const NEXT_DAY_0830 = "2024-01-02T08:30:00.000Z";

function createSlot(
  start: string,
  end: string
): TestSlot {
  return {
    dutyId: "d1",
    staffId: "s1",
    type: "work",
    startAt: start,
    endAt: end,
  };
}

describe("OvertimeSlotResolvedProjection - DUTY24 boundary tests", () => {
  const projection = new OvertimeSlotResolvedProjection();

  it("08:30ジャスト開始 → 超過なし", () => {
    const slots = [
      createSlot(BASE, NEXT_DAY_0830),
    ];

    const result = projection.resolve(
      slots as any,
      DUTY_DATE,
      "DUTY24"
    );

    expect(result.length).toBe(0);
  });

  it("08:30より前 → 前残業が発生する", () => {
    const slots = [
      createSlot(
        "2024-01-01T07:00:00.000Z",
        BASE
      ),
    ];

    const result = projection.resolve(
      slots as any,
      DUTY_DATE,
      "DUTY24"
    );

    expect(result.length).toBe(1);
    expect(result[0].startAt).toBe("2024-01-01T07:00:00.000Z");
    expect(result[0].endAt).toBe(BASE);
  });

  it("翌日08:30ジャスト終了 → 超過なし", () => {
    const slots = [
      createSlot(
        BASE,
        NEXT_DAY_0830
      ),
    ];

    const result = projection.resolve(
      slots as any,
      DUTY_DATE,
      "DUTY24"
    );

    expect(result.length).toBe(0);
  });

  it("翌日08:30より後 → 後残業が発生する", () => {
    const slots = [
      createSlot(
        NEXT_DAY_0830,
        "2024-01-02T10:00:00.000Z"
      ),
    ];

    const result = projection.resolve(
      slots as any,
      DUTY_DATE,
      "DUTY24"
    );

    expect(result.length).toBe(1);
    expect(result[0].startAt).toBe(NEXT_DAY_0830);
    expect(result[0].endAt).toBe("2024-01-02T10:00:00.000Z");
  });
});

it("DUTY24 + sleepWindow 統合テスト", () => {
  const projection = new OvertimeSlotResolvedProjection();

  const slots = [
    {
      dutyId: "d1",
      staffId: "s1",
      type: "work",
      startAt: "2024-01-01T08:30:00.000Z",
      endAt: "2024-01-02T10:00:00.000Z",
    },
  ];

  const result = projection.resolve(
    slots as any,
    "2024-01-01",
    "DUTY24",
    {
      startAt: "2024-01-02T00:00:00.000Z",
      endAt: "2024-01-02T06:45:00.000Z",
    }
  );

  expect(result.length).toBe(2);

  expect(result).toContainEqual({
    dutyId: "d1",
    staffId: "s1",
    startAt: "2024-01-02T00:00:00.000Z",
    endAt: "2024-01-02T06:45:00.000Z",
  });

  expect(result).toContainEqual({
    dutyId: "d1",
    staffId: "s1",
    startAt: "2024-01-02T08:30:00.000Z",
    endAt: "2024-01-02T10:00:00.000Z",
  });
});
