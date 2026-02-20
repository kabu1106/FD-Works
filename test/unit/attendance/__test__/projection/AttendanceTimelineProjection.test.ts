import { describe, it, expect, beforeEach } from "vitest";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

type AnyEvent = any;

// ヘルパー関数群はそのまま活用
const workStarted = (at: string): AnyEvent => ({
  eventType: "WorkStarted",
  payload: { dutyId: "duty-1", staffId: "staff-1", at },
});

const breakStarted = (at: string): AnyEvent => ({
  eventType: "BreakStarted",
  payload: { dutyId: "duty-1", staffId: "staff-1", at },
});

const breakEnded = (at: string): AnyEvent => ({
  eventType: "BreakEnded",
  payload: { dutyId: "duty-1", staffId: "staff-1", at },
});

const workEnded = (at: string): AnyEvent => ({
  eventType: "WorkEnded",
  payload: { dutyId: "duty-1", staffId: "staff-1", at },
});

const vehicleReturned = (at: string): AnyEvent => ({
  eventType: "VehicleReturned",
  payload: { dutyId: "duty-1", staffId: "staff-1", at }, // スキーマに合わせて調整
});

describe("AttendanceTimelineProjection", () => {
  let projection: AttendanceTimelineProjection;
  let state: TimelineState;

  beforeEach(() => {
    projection = new AttendanceTimelineProjection();
    // 毎回クリーンな状態から開始
    state = createInitialTimelineState();
  });

  it("WorkStarted で work スロットが開始される", () => {
    state = projection.project(state, workStarted("10:00"));

    expect(state.slots).toHaveLength(1);
    expect(state.currentState).toBe("WORK");
    expect(state.slots[0]).toEqual({
      dutyId: "duty-1",
      staffId: "staff-1",
      type: "work",
      startAt: "10:00",
      endAt: null,
    });
  });

  it("BreakStarted で直前の work が閉じられ break が開始される", () => {
    state = projection.project(state, workStarted("10:00"));
    state = projection.project(state, breakStarted("12:00"));

    expect(state.slots).toHaveLength(2);
    expect(state.currentState).toBe("BREAK");
    expect(state.slots[0].endAt).toBe("12:00");
    expect(state.slots[1]).toEqual({
      dutyId: "duty-1",
      staffId: "staff-1",
      type: "break",
      startAt: "12:00",
      endAt: null,
    });
  });

  it("BreakEnded で break が閉じられ work が再開される", () => {
    state = projection.project(state, workStarted("10:00"));
    state = projection.project(state, breakStarted("12:00"));
    state = projection.project(state, breakEnded("12:30"));

    expect(state.slots).toHaveLength(3);
    expect(state.slots[1].endAt).toBe("12:30");
    expect(state.slots[2].type).toBe("work");
    expect(state.slots[2].startAt).toBe("12:30");
    expect(state.slots[2].endAt).toBeNull();
  });

  it("WorkEnded で openSlot が閉じられる", () => {
    state = projection.project(state, workStarted("10:00"));
    state = projection.project(state, workEnded("18:00"));

    expect(state.slots).toHaveLength(1);
    expect(state.slots[0].endAt).toBe("18:00");
    expect(state.currentState).toBe("IDLE");
    expect(state.openSlot).toBeNull();
  });

  it("openSlot が無い状態で無関係なイベントが来ても安全", () => {
    // 状態遷移に関係ないイベント（またはガード条件に弾かれるイベント）
    state = projection.project(state, vehicleReturned("16:00"));
    
    expect(state.slots).toHaveLength(0);
    expect(state.currentState).toBe("IDLE");
  });
});