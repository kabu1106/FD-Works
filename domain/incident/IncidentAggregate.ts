import { AggregateRoot } from "../shared/AggregateRoot";
import { IncidentEvent } from "./incident-events";

export class IncidentAggregate extends AggregateRoot<IncidentEvent> {
  private incidentId!: string;
  private closed = false;
  private closedAt!: string;

  static occur(incidentId: string, dutyId: string, locationId: number) {
    const agg = new IncidentAggregate();
    agg.apply({
      eventType: "IncidentOccurred",
      payload: {
        incidentId,
        dutyId,
        locationId,
        occurredAt: new Date().toISOString(),
      },
    });
    return agg;
  }

  dispatchVehicle(vehicleId: number) {
    if (this.closed) throw new Error("Incident closed");
    this.apply({
      eventType: "VehicleDispatched",
      payload: {
      incidentId: this.incidentId,
      vehicleId,
      dispatchedAt: new Date().toISOString(),
      },
    });
  }

  close() {
    this.apply({ eventType: "IncidentClosed", payload:{ incidentId:this.incidentId, closedAt:this.closedAt }  });
  }

  protected when(event: IncidentEvent) {
    switch (event.eventType) {
      case "IncidentOccurred":
        this.incidentId = event.payload.incidentId;
        break;
      case "IncidentClosed":
        this.closed = true;
        break;
    }
  }
}
