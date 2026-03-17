import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";
import { DutyState } from "@/projections/duty/DutyState";

export class DutyProjection {

  project(state: DutyState, event: DutyEventDTO): DutyState {

    switch (event.eventType) {

      case "DutyCreated":
        return {
          ...state,
          duty: {
            id: event.payload.dutyId,
            date: event.payload.date,
            teamId: event.payload.teamId,
            status: "UNAPPROVED",
            isLocked: false,
            lockedAt: null
          }
        };

      case "WorkGroupAssignedToStaff":
      case "WorkGroupAssignmentChanged": {

        const workGroupId =
          event.eventType === "WorkGroupAssignmentChanged"
            ? event.payload.newWorkGroupId
            : event.payload.workGroupId;

        const filtered = state.assignments.filter(
          a => !(a.staffId === event.payload.staffId && a.dutyId === event.payload.dutyId)
        );

        return {
          ...state,
          assignments: [
            ...filtered,
            {
              dutyId: event.payload.dutyId,
              staffId: event.payload.staffId,
              workGroupId
            }
          ]
        };
      }

      case "StaffUnassignedFromDuty":

        return {
          ...state,
          assignments: state.assignments.filter(
            a => a.staffId !== event.payload.staffId
          )
        };

      case "DutyApproved":

        return {
          ...state,
          duty: state.duty
            ? { ...state.duty, status: "APPROVED" }
            : state.duty
        };

      case "DutyApprovalRevoked":

        return {
          ...state,
          duty: state.duty
            ? { ...state.duty, status: "UNAPPROVED" }
            : state.duty
        };

      case "DutyLocked":

        return {
          ...state,
          duty: state.duty
            ? { ...state.duty, isLocked: true, lockedAt: new Date().toISOString() }
            : state.duty
        };

      case "DutyMarkedForRecalculation":

        return {
          ...state,
          duty: state.duty
            ? { ...state.duty, isLocked: false }
            : state.duty
        };

      default:
        return state;

    }

  }

}