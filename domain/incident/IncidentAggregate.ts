import { AggregateRoot } from "../shared/AggregateRoot";
import { IncidentEvent } from "./incident-events";

export class IncidentAggregate extends AggregateRoot<IncidentEvent> {
  private incidentId!: string;
  private closed = false;

  protected readonly aggregateType = "Incident";
  private dispatchedVehicles = new Set<number>();

  static report(
    incidentId: string,
    dutyId: string,
    locationId: number,
    occurredAt: string
  ) {
    const agg = new IncidentAggregate();
    agg.apply({
      eventType: "IncidentOccurred",
      payload: { incidentId, dutyId, locationId, occurredAt },
    });
    return agg;
  }

  dispatchVehicle(vehicleId: number, dispatchedAt: string) {
    if (this.closed) throw new Error("Incident closed");
    if (this.dispatchedVehicles.has(vehicleId)) {
      throw new Error("Vehicle already dispatched");
    }

    this.apply({
      eventType: "VehicleDispatched",
      payload: { incidentId: this.incidentId, vehicleId, dispatchedAt },
    });
  }

  boardStaff(
    vehicleId: number,
    staffId: number,
    //boardedAt: string
  ) {
    if (this.closed) throw new Error("Incident closed");
    if (!this.dispatchedVehicles.has(vehicleId)) {
      throw new Error("Vehicle not dispatched");
    }

    this.apply({
      eventType: "StaffBoarded",
      payload: {
        incidentId: this.incidentId,
        vehicleId,
        staffId,
        //boardedAt,
      },
    });
  }

  returnVehicle(vehicleId: number, returnedAt: string) {
    if (this.closed) throw new Error("Incident closed");

    this.apply({
      eventType: "VehicleReturned",
      payload: { incidentId: this.incidentId, vehicleId, returnedAt },
    });
  }

  close(closedAt: string) {
    if (this.closed) throw new Error("Already closed");

    this.apply({
      eventType: "IncidentClosed",
      payload: { incidentId: this.incidentId, closedAt },
    });
  }

  protected when(event: IncidentEvent) {
    switch (event.eventType) {
      case "IncidentOccurred":
        this.incidentId = event.payload.incidentId;
        break;
      case "VehicleDispatched":
        this.dispatchedVehicles.add(event.payload.vehicleId);
        break;
      case "IncidentClosed":
        this.closed = true;
        break;
    }
  }
}
