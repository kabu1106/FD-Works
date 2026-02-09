// src/domain/duty/DutyAggregate.ts

import { AggregateRoot } from "../shared/AggregateRoot";
import { DutyEvent } from "./duty-events";

export class DutyAggregate extends AggregateRoot<DutyEvent> {
  private dutyId!: string;
  private teamId!: number;
  private date!: string;
  private reason!: string;

  private approved = false;
  private locked = false;
  private staffIds = new Set<number>();

  // =====================
  // Factory
  // =====================
  static create(dutyId: string, teamId: number, date: string) {
    const agg = new DutyAggregate();
    agg.apply({
      eventType: "DutyCreated",
      payload: { dutyId, teamId, date },
    });
    return agg;
  }

  // =====================
  // Commands
  // =====================
  assignStaff(staffId: number) {
    this.ensureMutable();
    if (this.staffIds.has(staffId)) {
      throw new Error("Staff already assigned");
    }

    this.apply({
      eventType: "StaffAssignedToDuty",
      payload: { dutyId: this.dutyId, staffId },
    });
  }

  unassignStaff(staffId: number) {
    this.ensureMutable();
    if (!this.staffIds.has(staffId)) {
      throw new Error("Staff not assigned");
    }

    this.apply({
      eventType: "StaffUnassignedFromDuty",
      payload: { dutyId: this.dutyId, staffId, reason: this.reason },
    });
  }

  approve(approvedBy: string) {
    if (this.approved) throw new Error("Already approved");
    if (this.locked) throw new Error("Already locked");
    if (this.staffIds.size === 0) {
      throw new Error("Cannot approve duty without staff");
    }

    this.apply({
      eventType: "DutyApproved",
      payload: { dutyId: this.dutyId, approvedBy },
    });
  }

  revokeApproval() {
    if (!this.approved) throw new Error("Not approved");
    if (this.locked) throw new Error("Already locked");

    this.apply({
      eventType: "DutyApprovalRevoked",
      payload: { dutyId: this.dutyId, reason:this.reason },
    });
  }

  lock() {
    if (!this.approved) throw new Error("Cannot lock unapproved duty");

    this.apply({
      eventType: "DutyLocked",
      payload: { dutyId: this.dutyId },
    });
  }

  markForRecalculation(reason: string) {
    if (!this.locked) {
      throw new Error("Only locked duty can be recalculated");
    }

    this.apply({
      eventType: "DutyMarkedForRecalculation",
      payload: { dutyId: this.dutyId, reason },
    });
  }

  // =====================
  // Guards
  // =====================
  private ensureMutable() {
    if (this.approved || this.locked) {
      throw new Error("Duty is immutable");
    }
  }

  // =====================
  // Event Applier
  // =====================
  protected when(event: DutyEvent) {
    switch (event.eventType) {
      case "DutyCreated":
        this.dutyId = event.payload.dutyId;
        this.teamId = event.payload.teamId;
        this.date = event.payload.date;
        break;

      case "StaffAssignedToDuty":
        this.staffIds.add(event.payload.staffId);
        break;

      case "StaffUnassignedFromDuty":
        this.staffIds.delete(event.payload.staffId);
        break;

      case "DutyApproved":
        this.approved = true;
        break;

      case "DutyApprovalRevoked":
        this.approved = false;
        break;

      case "DutyLocked":
        this.locked = true;
        break;

      case "DutyMarkedForRecalculation":
        // stateは変えない（Projection用イベント）
        break;
    }
  }
}
