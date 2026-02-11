// src/projection/attendance/AttendanceTimelineProjection.ts

import { AttendanceEvent } from "@/domain/attendance/attendance-events";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { DutyEvent } from "@/domain/duty/duty-events";
import { AttendanceTimelineSlot } from "@/domain/attendance/attendanceTimelineSlot";

type DomainEvent = AttendanceEvent | IncidentEvent | DutyEvent;

export class AttendanceTimelineProjection {
  private slots: AttendanceTimelineSlot[] = [];

  /** 継続中スロット（staff × duty × type） */
  private openSlot?: AttendanceTimelineSlot;

  project(event: DomainEvent): AttendanceTimelineSlot[] {
    switch (event.eventType) {
      // =====================
      // Attendance
      // =====================
      case "WorkStarted":
        this.closeOpenSlot(event.payload.at);
        this.openSlot = {
          dutyId: event.payload.dutyId,
          staffId: event.payload.staffId,
          type: "work",
          startAt: event.payload.at,
          endAt: null,
        };
        this.slots.push(this.openSlot);
        break;

      case "BreakStarted":
        this.closeOpenSlot(event.payload.at);
        this.openSlot = {
          dutyId: event.payload.dutyId,
          staffId: event.payload.staffId,
          type: "break",
          startAt: event.payload.at,
          endAt: null,
        };
        this.slots.push(this.openSlot);
        break;

      case "BreakEnded":
        this.closeOpenSlot(event.payload.at);
        this.openSlot = {
          dutyId: event.payload.dutyId,
          staffId: event.payload.staffId,
          type: "work",
          startAt: event.payload.at,
          endAt: null,
        };
        this.slots.push(this.openSlot);
        break;

      case "WorkEnded":
        this.closeOpenSlot(event.payload.at);
        this.openSlot = undefined;
        break;

      // =====================
      // Incident
      // =====================
      case "StaffBoarded":
        this.closeOpenSlot(event.payload.boardedAt);
        this.openSlot = {
          dutyId: event.payload.incidentId, // 紐づく duty は Projection 上で解決済前提
          staffId: event.payload.staffId,
          type: "incident",
          startAt: event.payload.boardedAt,
          endAt: null,
        };
        this.slots.push(this.openSlot);
        break;

      case "VehicleReturned":
        this.closeOpenSlot(event.payload.returnedAt);
        break;

      // =====================
      // Recalculation
      // =====================
      case "DutyMarkedForRecalculation":
        this.reset();
        break;
    }

    return this.slots;
  }

  // =====================
  // Helpers
  // =====================
  private closeOpenSlot(at: string) {
    if (this.openSlot && this.openSlot.endAt === null) {
      this.openSlot.endAt = at;
    }
  }

  reset() {
    this.slots = [];
    this.openSlot = undefined;
  }
}
