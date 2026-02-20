import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import { AttendanceTimelineSlot } from "@/domain/attendance/attendanceTimelineSlot";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

const toMinutes = (time: string): number => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const increasingTimesArb = fc
  .array(fc.integer({ min: 0, max: 1000 }), { minLength: 1, maxLength: 40 })
  .map((arr) => arr.sort((a, b) => a - b));

const staffIds = ["s1", "s2"];
const dutyIds = ["d1", "d2"];

describe("AttendanceTimelineProjection Overlap Property Test", () => {
  it("aggregate単位で時間重複が発生しない", () => {
    fc.assert(
      fc.property(increasingTimesArb, (minutesArr) => {
        const projection = new AttendanceTimelineProjection();
        
        // ★修正: 集約(staff:duty)ごとの状態を Map で管理する
        const states = new Map<string, TimelineState>();

        for (const m of minutesArr) {
          const at = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
          const staffId = staffIds[m % staffIds.length];
          const dutyId = dutyIds[m % dutyIds.length];
          const key = `${staffId}:${dutyId}`;

          // ★修正: 以前の状態を取得、なければ初期化
          const currentState = states.get(key) || createInitialTimelineState();

          const eventTypes = ["WorkStarted", "BreakStarted", "BreakEnded", "WorkEnded"];
          const eventType = eventTypes[m % eventTypes.length];

          // ★修正: 純粋関数として実行し、結果を保存
          const nextState = projection.project(currentState, {
            eventType,
            payload: { staffId, dutyId, at },
          });
          
          states.set(key, nextState);
        }

        // 全集約の状態を検証
        for (const [key, finalState] of states.entries()) {
          const group = finalState.slots;
          if (group.length === 0) continue;

          // ... (重複チェックのロジックは finalState.slots に対して実行)
          
          // open slot チェック
          const openCount = finalState.openSlot ? 1 : 0;
          expect(openCount).toBeLessThanOrEqual(1);

          // 各ペアの重複チェック
// 各ペアの重複チェック
for (let i = 0; i < group.length; i++) {
  for (let j = i + 1; j < group.length; j++) {
    const a = group[i];
    const b = group[j];

    const aStart = toMinutes(a.startAt);
    const aEnd = a.endAt === null ? Number.MAX_SAFE_INTEGER : toMinutes(a.endAt);

    const bStart = toMinutes(b.startAt);
    const bEnd = b.endAt === null ? Number.MAX_SAFE_INTEGER : toMinutes(b.endAt);

    // ★ overlap の定義を追加
    // 期間Aの開始が期間Bの終了より前、かつ、期間Bの開始が期間Aの終了より前であれば重複
    const overlap = aStart < bEnd && bStart < aEnd;

    expect(overlap).toBe(false);
  }
}
        }
      }),
      { numRuns: 200 }
    );
  });
});