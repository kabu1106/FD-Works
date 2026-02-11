// src/projection/incident/IncidentStaffEngagementProjection.ts

import { IncidentEvent } from "@/domain/incident/incident-events";
import { IncidentStaffEngagement } from "../../domain/incident/IncidentStaffEngagementModel";

type BoardingKey = `${number}-${number}`; // vehicleId-staffId

export class IncidentStaffEngagementProjection {
  private readonly engagements: IncidentStaffEngagement[] = [];
  private readonly onboardMap = new Map<BoardingKey, string>();

  project(event: IncidentEvent): IncidentStaffEngagement[] {
    switch (event.eventType) {
      case "StaffBoarded": {
        const key: BoardingKey = `${event.payload.vehicleId}-${event.payload.staffId}`;
        this.onboardMap.set(key, event.payload.boardedAt);
        break;
      }

      case "VehicleReturned": {
        for (const [key, boardedAt] of this.onboardMap.entries()) {
          const [vehicleId, staffId] = key.split("-").map(Number);

          if (vehicleId !== event.payload.vehicleId) continue;

          this.engagements.push({
            incidentId: event.payload.incidentId,
            staffId,
            vehicleId,
            engagedFrom: boardedAt,
            engagedTo: event.payload.returnedAt,
          });

          this.onboardMap.delete(key);
        }
        break;
      }

      case "IncidentClosed": {
        // 安全装置：未Returnの乗車を全クローズ
        for (const [key, boardedAt] of this.onboardMap.entries()) {
          const [vehicleId, staffId] = key.split("-").map(Number);

          this.engagements.push({
            incidentId: event.payload.incidentId,
            staffId,
            vehicleId,
            engagedFrom: boardedAt,
            engagedTo: event.payload.closedAt,
          });

          this.onboardMap.delete(key);
        }
        break;
      }
    }

    return this.engagements;
  }

  reset() {
    this.engagements.length = 0;
    this.onboardMap.clear();
  }
}
