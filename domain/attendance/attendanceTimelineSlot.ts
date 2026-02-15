// src/projection/attendance/AttendanceTimelineSlot.ts

export type AttendanceSlotType = "work" | "break" ;

export interface AttendanceTimelineSlot {
  dutyId: string;
  staffId: number;
  type: AttendanceSlotType;
  startAt: string;      // ISO DateTime
  endAt: string | null; // null = ongoing
}

