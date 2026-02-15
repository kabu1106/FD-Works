// src/domain/attendance/attendanceTimelineTypes.ts
import { AttendanceTimelineSlot } from "./attendanceTimelineSlot";

export type AttendanceState = "IDLE" | "WORK" | "BREAK";

export interface TimelineState {
  slots: AttendanceTimelineSlot[];
  currentState: AttendanceState;
  openSlot: AttendanceTimelineSlot | null;
}

// 初期状態のファクトリ
export const createInitialTimelineState = (): TimelineState => ({
  slots: [],
  currentState: "IDLE",
  openSlot: null,
});