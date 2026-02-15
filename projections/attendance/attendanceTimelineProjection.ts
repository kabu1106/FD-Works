// src/domain/attendance/AttendanceTimelineProjection.ts
import { TimelineState } from "@/domain/attendance/attendanceTimelineTypes";
import { AttendanceTimelineSlot } from "@/domain/attendance/attendanceTimelineSlot";

export class AttendanceTimelineProjection {
  /**
   * 現在の状態とイベントを受け取り、新しい状態を計算して返す
   */
  project(state: TimelineState, event: any): TimelineState {
    const { staffId, dutyId, at } = event.payload;
    
    // 状態のコピー（イミュータブルな扱いの準備）
    let { slots, currentState, openSlot } = { ...state };
    // 配列は新しく生成して、元の state を破壊しない
    slots = [...slots];

    const startSlot = (type: AttendanceTimelineSlot["type"]) => {
      const slot: AttendanceTimelineSlot = {
        dutyId,
        staffId,
        type,
        startAt: at,
        endAt: null,
      };
      slots.push(slot);
      openSlot = slot;
    };

    const closeSlot = () => {
      if (!openSlot) return;
      // 参照経由で slots 内のオブジェクトを更新
      openSlot.endAt = at;
      openSlot = null;
    };

    switch (event.eventType) {
      case "WorkStarted":
        if (currentState !== "IDLE") break;
        startSlot("work");
        currentState = "WORK";
        break;

      case "BreakStarted":
        if (currentState !== "WORK") break;
        closeSlot();
        startSlot("break");
        currentState = "BREAK";
        break;

      case "BreakEnded":
        if (currentState !== "BREAK") break;
        closeSlot();
        startSlot("work");
        currentState = "WORK";
        break;

      case "WorkEnded":
        if (currentState !== "WORK") break;
        closeSlot();
        currentState = "IDLE";
        break;
    }

    return { slots, currentState, openSlot };
  }
}