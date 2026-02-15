import { describe, it, expect } from "vitest";
import { IncidentCommandHandler } from "@/domain/incident/IncidentCommandHandler";
import { InMemoryEventStoreRepository } from "@/infra/event-store/in-memory-event-store";
import { IncidentEvent } from "@/domain/incident/incident-events";

describe("IncidentCommandHandler retry", () => {
  it("should retry and succeed after concurrency conflict", async () => {
    const store = new InMemoryEventStoreRepository<IncidentEvent>();
    const handlerA = new IncidentCommandHandler(store);
    const handlerB = new IncidentCommandHandler(store);

    // create
    await handlerA.handle({
      type: "ReportIncident",
      incidentId: "i1",
      dutyId: "d1",
      locationId: 10,
      occurredAt: "2025-10-01T10:00:00Z",
    } as any);

    // simulate race
    await Promise.all([
      handlerA.handle({
        type: "DispatchVehicle",
        incidentId: "i1",
        vehicleId: 1,
        dispatchedAt: "2025-10-01T10:05:00Z",
      } as any),
      handlerB.handle({
        type: "DispatchVehicle",
        incidentId: "i1",
        vehicleId: 2,
        dispatchedAt: "2025-10-01T10:05:01Z",
      } as any),
    ]);

    const events = await store.load("incident-i1");

    const dispatchEvents = events.filter(
      (e) => e.eventType === "VehicleDispatched"
    );

    expect(dispatchEvents.length).toBe(2);
  });
});
