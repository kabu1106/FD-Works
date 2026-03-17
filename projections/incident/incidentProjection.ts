import { IncidentEventDTO } from "@/domain/incident/incidentEventSchema";
import { IncidentState } from "@/projections/incident/IncidentState";

export class IncidentProjection {

  project(state: IncidentState, event: IncidentEventDTO): IncidentState {

    switch (event.eventType) {

      case "IncidentOccurred":

        return {
          ...state,
          incident: {
            id: event.payload.incidentId,
            dutyId: event.payload.dutyId,
            locationId: event.payload.locationId,
            occurredAt: event.payload.occurredAt,
            status: "OPEN",
            closedAt: null
          }
        };

      case "VehicleDispatched":

        return {
          ...state,
          vehicles: [
            ...state.vehicles,
            {
              vehicleId: event.payload.vehicleId,
              dispatchedAt: event.payload.dispatchedAt,
              returnedAt: null,
              staffIds: []
            }
          ]
        };

      case "StaffBoarded":

        return {
          ...state,
          vehicles: state.vehicles.map(v =>
            v.vehicleId === event.payload.vehicleId
              ? { ...v, staffIds: [...v.staffIds, event.payload.staffId] }
              : v
          )
        };

      case "VehicleReturned":

        return {
          ...state,
          vehicles: state.vehicles.map(v =>
            v.vehicleId === event.payload.vehicleId
              ? { ...v, returnedAt: event.payload.returnedAt }
              : v
          )
        };

      case "IncidentClosed":

        return {
          ...state,
          incident: state.incident
            ? {
                ...state.incident,
                status: "CLOSED",
                closedAt: event.payload.closedAt
              }
            : state.incident
        };

      default:
        return state;
    }

  }

}