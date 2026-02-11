// src/domain/incident/incidentCommands.ts

export type IncidentCommand =
  | {
      type: "ReportIncident";
      incidentId: string;
      dutyId: string;
      locationId: number;
      occurredAt: string;
    }
  | {
      type: "DispatchVehicle";
      incidentId: string;
      vehicleId: number;
      dispatchedAt: string;
    }
  | {
      type: "BoardStaff";
      incidentId: string;
      vehicleId: number;
      staffId: number;
      boardedAt: string;
    }
  | {
      type: "ReturnVehicle";
      incidentId: string;
      vehicleId: number;
      returnedAt: string;
    }
  | {
      type: "CloseIncident";
      incidentId: string;
      closedAt: string;
    };
