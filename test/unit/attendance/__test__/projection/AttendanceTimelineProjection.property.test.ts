import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

type AnyEvent = any;

/**
 * 分単位整数を HH:mm に変換
 */
const toTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};

/**
 * 時刻列からランダムなイベントシーケンスを生成する Arbitrary
 */
const eventSequenceArb = fc
  .array(fc.integer({ min: 0, max: 24 * 60 }), { maxLength: 50 })
  .map((arr) => arr.sort((a, b) => a - b))
  .chain((minutesArr) => {
    // 各時刻に対してランダムなイベントタイプを割り当てる
    const commands = minutesArr.map((m) =>
      fc.record({
        minutes: fc.constant(m),
        type: fc.constantFrom(
          "WorkStarted",
          "BreakStarted",
          "BreakEnded",
          "WorkEnded",
          "StaffBoarded",
          "VehicleReturned"
        ),
      })
    );
    return fc.tuple(...commands);
  });

describe("AttendanceTimelineProjection Property Test (monotonic time)", () => {
  it("時系列保証下で整合性を保つ", () => {
    fc.assert(
      fc.property(eventSequenceArb, (eventsData) => {
        const projection = new AttendanceTimelineProjection();
        // ★修正: 状態を管理する Map (今回は s1:d1 固定だが将来拡張可能)
        const states = new Map<string, TimelineState>();

        for (const { minutes, type } of eventsData) {
          const at = toTime(minutes);
          const staffId = "s1";
          const dutyId = "d1";
          const key = `${staffId}:${dutyId}`;

          // 現在の状態を取得、なければ初期化
          const currentState = states.get(key) || createInitialTimelineState();

          // イベントオブジェクトを構築
          const event: AnyEvent = {
            eventType: type,
            payload: { dutyId, staffId, at, boardedAt: at, returnedAt: at },
          };

          // ★修正: 純粋関数として実行
          const nextState = projection.project(currentState, event);
          states.set(key, nextState);
        }

        // 全ての集約状態を検証
        for (const [key, finalState] of states.entries()) {
          // 1. openSlot の不変条件チェック
          const openCount = finalState.openSlot ? 1 : 0;
          expect(openCount, `Aggregate ${key} should have at most 1 open slot`).toBeLessThanOrEqual(1);

          // 2. 状態と openSlot の整合性チェック
          if (finalState.currentState === "IDLE") {
            expect(finalState.openSlot, "IDLE state should not have an open slot").toBeNull();
          } else {
            expect(finalState.openSlot, `${finalState.currentState} state should have an open slot`).not.toBeNull();
          }

          // 3. スロットの終了時刻が開始時刻以降であることの検証
          for (const slot of finalState.slots) {
            if (slot.endAt) {
              const start = Math.floor(parseInt(slot.startAt.split(":")[0]) * 60 + parseInt(slot.startAt.split(":")[1]));
              const end = Math.floor(parseInt(slot.endAt.split(":")[0]) * 60 + parseInt(slot.endAt.split(":")[1]));
              expect(end).toBeGreaterThanOrEqual(start);
            }
          }
        }
      }),
      { numRuns: 100 }
    );
  });
});