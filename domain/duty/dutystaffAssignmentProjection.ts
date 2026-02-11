// src/projection/duty/DutyStaffAssignmentProjection.ts

import { DutyEvent } from "@/domain/duty/duty-events";
import { DutyStaffAssignment } from "./dutyStaffAssignmentModel";

export class DutyStaffAssignmentProjection {
  private readonly assignments = new Map<number, DutyStaffAssignment>();
  private dutyMeta?: { dutyId: string; date: string; teamId: number };

  project(event: DutyEvent): DutyStaffAssignment[] {
    switch (event.eventType) {
      case "DutyCreated":
        this.dutyMeta = {
          dutyId: event.payload.dutyId,
          date: event.payload.date,
          teamId: event.payload.teamId,
        };
        break;

      case "StaffAssignedToDuty": {
        if (!this.dutyMeta) break;

        this.assignments.set(event.payload.staffId, {
          dutyId: this.dutyMeta.dutyId,
          date: this.dutyMeta.date,
          teamId: this.dutyMeta.teamId,
          staffId: event.payload.staffId,
          workGroupId: null,
          status: "assigned",
        });
        break;
      }

      case "StaffUnassignedFromDuty": {
        const record = this.assignments.get(event.payload.staffId);
        if (!record) break;

        record.status = "unassigned";
        break;
      }

      case "WorkGroupAssignedToStaff":
      case "WorkGroupAssignmentChanged": {
        const record = this.assignments.get(event.payload.staffId);
        if (!record) break;

        record.workGroupId =
          "newWorkGroupId" in event.payload
            ? event.payload.newWorkGroupId
            : event.payload.workGroupId;
        break;
      }
    }

    return Array.from(this.assignments.values());
  }

  reset() {
    this.assignments.clear();
    this.dutyMeta = undefined;
  }
}
