import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { AttendanceTimelineProjection } from "../attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

type AnyEvent = any;

const staffIds = [1, 2, 3];
const dutyIds = [10, 20, 30];
const incidentIds = [100, 200, 300];

const toTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};

// 1. 各時刻に対するイベントの中身を生成する Arbitrary
const eventBodyArb = fc.oneof(
  fc.record({
    eventType: fc.constant("WorkStarted"),
    payload: fc.record({
      dutyId: fc.constantFrom(...dutyIds),
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.record({
    eventType: fc.constant("BreakStarted"),
    payload: fc.record({
      dutyId: fc.constantFrom(...dutyIds),
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.record({
    eventType: fc.constant("BreakEnded"),
    payload: fc.record({
      dutyId: fc.constantFrom(...dutyIds),
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.record({
    eventType: fc.constant("WorkEnded"),
    payload: fc.record({
      dutyId: fc.constantFrom(...dutyIds),
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.record({
    eventType: fc.constant("StaffBoarded"),
    payload: fc.record({
      incidentId: fc.constantFrom(...incidentIds),
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.record({
    eventType: fc.constant("VehicleReturned"),
    payload: fc.record({
      dutyId: fc.constantFrom(...dutyIds), // 元のコードにはなかったが、key特定のため追加が望ましい
      staffId: fc.constantFrom(...staffIds),
    }),
  }),
  fc.constant({
    eventType: "DutyMarkedForRecalculation",
    payload: {},
  })
);

// 2. 単調増加する時刻とイベント内容をセットにした配列を生成
const eventsSequenceArb = fc
  .array(fc.integer({ min: 0, max: 24 * 60 }), { maxLength: 50 })
  .map((arr) => arr.sort((a, b) => a - b))
  .chain((minutesArr) =>
    fc.tuple(...minutesArr.map((m) => fc.record({ minutes: fc.constant(m), body: eventBodyArb })))
  );

describe("AttendanceTimelineProjection Strong Invariant Property Test", () => {
  it("aggregate単位で不変条件を満たす", () => {
    fc.assert(
      fc.property(eventsSequenceArb, (events) => {
        const projection = new AttendanceTimelineProjection();
        
        // ★修正: 集約(staff:duty)ごとの状態を管理
        const states = new Map<string, TimelineState>();

        for (const { minutes, body } of events) {
          const at = toTime(minutes);
        
          // ★修正: 型安全なプロパティ抽出
          // payload が存在するか、および各プロパティが存在するかをチェック
          const payload = (body as any).payload || {};
          
          // staffId や dutyId が無いイベント（Recalculationなど）の場合、
          // 検証対象外（またはデフォルトのキー）として扱う
          const staffId = payload.staffId ?? "unknown";
          const dutyId = payload.dutyId ?? "unknown";
          const key = `${staffId}:${dutyId}`;
        
          // staffId または dutyId が取得できないイベントは、
          // 今回のタイムライン投影の対象外としてスキップするガードを入れるのがレベル300の設計
          if (staffId === "unknown" || dutyId === "unknown") {
            continue; 
          }
        
          const currentState = states.get(key) || createInitialTimelineState();
        
          const event: AnyEvent = {
            eventType: body.eventType,
            payload: { ...payload, at },
          };
        
          const nextState = projection.project(currentState, event);
          states.set(key, nextState);
        }

        // 全集約(staff:duty)の状態を個別に検証
        for (const [key, finalState] of states.entries()) {
          const sorted = [...finalState.slots].sort((a, b) =>
            a.startAt.localeCompare(b.startAt)
          );

          // 1. start <= end (整合性チェック)
          for (const slot of sorted) {
            if (slot.endAt !== null) {
              expect(slot.startAt <= slot.endAt, `Slot in ${key} has start > end`).toBeTruthy();
            }
          }

          // 2. openは高々1 (Projectionの状態と一致しているか)
          const openInSlots = sorted.filter((s) => s.endAt === null);
          expect(openInSlots.length).toBeLessThanOrEqual(1);
          
          const openInState = finalState.openSlot ? 1 : 0;
          expect(openInState).toBe(openInSlots.length);

          // 3. 連続するスロット間でのoverlap禁止
          for (let i = 0; i < sorted.length - 1; i++) {
            const current = sorted[i];
            const next = sorted[i + 1];

            if (current.endAt !== null) {
              expect(current.endAt <= next.startAt, `Overlap detected in ${key}`).toBeTruthy();
            }
          }
        }
      }),
      { numRuns: 100 }
    );
  });
});