import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { AttendanceTimelineProjection } from "../attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

type State = "IDLE" | "WORK" | "BREAK" | "INCIDENT";

interface ModelAggregate {
  state: State;
  lastStart?: string;
}

const staffIds = [1, 2];
const dutyIds = [10, 20];

const toTime = (m: number): string =>
  `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

const increasingTimesArb = fc
  .array(fc.integer({ min: 0, max: 600 }), { maxLength: 30 })
  .map((arr) => arr.sort((a, b) => a - b));

describe("AttendanceTimelineProjection Model-Based Test", () => {
  it("業務状態機械と整合する", () => {
    fc.assert(
      fc.property(increasingTimesArb, (minutesArr) => {
        const projection = new AttendanceTimelineProjection();
        
        // 1. モデル側の状態管理 (期待値)
        const model = new Map<string, ModelAggregate>();
        // 2. プロジェクション側の状態管理 (テスト対象の実装)
        const projectionStates = new Map<string, TimelineState>();

        for (const m of minutesArr) {
          const at = toTime(m);
          const staffId = staffIds[m % staffIds.length];
          const dutyId = dutyIds[m % dutyIds.length];
          const key = `${staffId}:${dutyId}`;

          // 各 Map の初期化
          if (!model.has(key)) model.set(key, { state: "IDLE" });
          if (!projectionStates.has(key)) projectionStates.set(key, createInitialTimelineState());

          const agg = model.get(key)!;
          const currentProjState = projectionStates.get(key)!;

          // ランダムイベント選択 (mに基づき決定論的に選択)
          const eventType = [
            "WorkStarted",
            "BreakStarted",
            "BreakEnded",
            "WorkEnded",
          ][m % 4];

          const event: any = {
            eventType,
            payload: { staffId, dutyId, at },
          };

          // ===== MODEL TRANSITION (正解モデル) =====
          switch (agg.state) {
            case "IDLE":
              if (eventType === "WorkStarted") {
                agg.state = "WORK";
                agg.lastStart = at;
              }
              break;
            case "WORK":
              if (eventType === "BreakStarted") {
                agg.state = "BREAK";
              } else if (eventType === "WorkEnded") {
                agg.state = "IDLE";
              }
              break;
            case "BREAK":
              if (eventType === "BreakEnded") {
                agg.state = "WORK";
              }
              break;
          }

          // ===== PROJECTION EXECUTION (実装の実行) =====
          const nextProjState = projection.project(currentProjState, event);
          projectionStates.set(key, nextProjState);
        }

        // ===== VERIFICATION (両者の整合性を検証) =====
        for (const [key, agg] of model.entries()) {
          const projState = projectionStates.get(key)!;
          const openInSlots = projState.slots.filter((s) => s.endAt === null);

          // 1. モデルの状態とプロジェクションの状態が論理的に一致するか
          if (agg.state === "IDLE") {
            expect(projState.currentState, `Key ${key} should be IDLE`).toBe("IDLE");
            expect(openInSlots.length, `Key ${key} should have no open slots`).toBe(0);
          } else {
            // WORK または BREAK の場合、必ず 1 つの openSlot が存在するはず
            expect(openInSlots.length, `Key ${key} should have exactly 1 open slot`).toBe(1);
            
            // プロジェクション内部の状態フラグもモデルと一致しているか
            const expectedProjState = agg.state === "WORK" ? "WORK" : "BREAK";
            expect(projState.currentState).toBe(expectedProjState);
          }

          // 2. 参照の一致チェック (openSlot プロパティが slots 配列の null と一致するか)
          if (projState.openSlot) {
            expect(openInSlots[0]).toBe(projState.openSlot);
          }
        }
      })
    );
  });
});