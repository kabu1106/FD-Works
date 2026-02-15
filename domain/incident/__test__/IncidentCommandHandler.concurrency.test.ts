import { describe, it, expect, beforeEach, vi } from "vitest";
import { IncidentCommandHandler } from "@/domain/incident/IncidentCommandHandler";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";

describe("IncidentCommandHandler - optimistic concurrency", () => {
  let eventStore: EventStoreRepository<IncidentEvent>;
  let handler: IncidentCommandHandler;

  beforeEach(() => {
    eventStore = {
      append: vi.fn(),
      load: vi.fn(),
    } as unknown as EventStoreRepository<IncidentEvent>;

    handler = new IncidentCommandHandler(eventStore);
  });

  it("should propagate concurrency error on DispatchVehicle", async () => {
    const history: IncidentEvent[] = [
      {
        eventType: "IncidentOccurred",
        payload: {
          incidentId: "i1",
          dutyId: "d1",
          locationId: 10,
          occurredAt: "2025-10-01T10:00:00Z",
        },
      },
    ] as any;

    (eventStore.load as any).mockResolvedValue(history);

    const concurrencyError = new Error("Concurrency conflict");
    (eventStore.append as any).mockRejectedValue(concurrencyError);

    const command = {
      type: "DispatchVehicle",
      incidentId: "i1",
      vehicleId: 1,
      dispatchedAt: "2025-10-01T10:05:00Z",
    } as any;

    await expect(handler.handle(command)).rejects.toThrow(
      "Concurrency conflict"
    );

    expect(eventStore.append).toHaveBeenCalledTimes(1);

    const [, , , version] =
      (eventStore.append as any).mock.calls[0];

    expect(version).toBe(1); // history length = 1
  });

  it("should propagate concurrency error on ReportIncident", async () => {
    const concurrencyError = new Error("Concurrency conflict");
    (eventStore.append as any).mockRejectedValue(concurrencyError);

    const command = {
      type: "ReportIncident",
      incidentId: "i1",
      dutyId: "d1",
      locationId: 10,
      occurredAt: "2025-10-01T10:00:00Z",
    } as any;

    await expect(handler.handle(command)).rejects.toThrow(
      "Concurrency conflict"
    );

    expect(eventStore.append).toHaveBeenCalledTimes(1);

    const [, , , version] =
      (eventStore.append as any).mock.calls[0];

    expect(version).toBe(0); // new stream
  });
});
