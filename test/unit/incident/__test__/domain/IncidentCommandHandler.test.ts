import { describe, it, expect, beforeEach, vi, Mocked } from "vitest";
import { IncidentCommandHandler } from "@/domain/incident/IncidentCommandHandler";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { IncidentProjector } from "@/projections/incident/incidentProjector";
import { incidentEventFactory } from "@/test/factories/incidentEvent.factory";

describe("IncidentCommandHandler", () => {
  let eventStore: Mocked<EventStoreRepository<IncidentEvent>>;
  let projection: Mocked<IncidentProjector>;
  let handler: IncidentCommandHandler;

  beforeEach(() => {
    // モックの初期化
    eventStore = {
      append: vi.fn().mockResolvedValue(undefined),
      load: vi.fn(),
    } as any;

    projection = {
      projectSingle: vi.fn().mockResolvedValue(undefined),
    } as any;

    handler = new IncidentCommandHandler(eventStore, projection);
  });

  describe("ReportIncident (New Stream)", () => {
    it("should append IncidentOccurred and trigger projection", async () => {
      const command = {
        type: "ReportIncident" as const,
        incidentId: "i1",
        dutyId: "d1",
        locationId: 10,
        occurredAt: "2025-10-01T10:00:00Z",
      };

      await handler.handle(command);

      // EventStoreの検証
      expect(eventStore.append).toHaveBeenCalledWith(
        "incident-i1",
        "Incident",
        [expect.objectContaining({ eventType: "IncidentOccurred" })],
        0
      );

      // Projectionの検証
      expect(projection.projectSingle).toHaveBeenCalledTimes(1);
    });
  });

  describe("Success cases (Table Driven)", () => {
    const incidentId = "i1";
    const streamId = `incident-${incidentId}`;

    const historyEvents = {
      occurred: incidentEventFactory.build({ 
        eventType: "IncidentOccurred", 
        payload: { incidentId } 
      }),
      dispatched: incidentEventFactory.build({ 
        eventType: "VehicleDispatched", 
        payload: { incidentId, vehicleId: 1 } 
      } as any),
    };

    const cases = [
      {
        name: "DispatchVehicle",
        history: [historyEvents.occurred],
        command: { type: "DispatchVehicle", incidentId, vehicleId: 1, dispatchedAt: "2025-10-01T10:05:00Z" },
        expectedType: "VehicleDispatched",
        expectedVersion: 1,
      },
      {
        name: "BoardStaff",
        history: [historyEvents.occurred, historyEvents.dispatched],
        command: { type: "BoardStaff", incidentId, vehicleId: 1, staffId: 100 },
        expectedType: "StaffBoarded",
        expectedVersion: 2,
      },
      {
        name: "CloseIncident",
        history: [historyEvents.occurred],
        command: { type: "CloseIncident", incidentId, closedAt: "2025-10-01T12:00:00Z" },
        expectedType: "IncidentClosed",
        expectedVersion: 1,
      },
    ];

    it.each(cases)("$name: should append $expectedType at version $expectedVersion", async (c) => {
      eventStore.load.mockResolvedValue(c.history as IncidentEvent[]);

      await handler.handle(c.command as any);

      expect(eventStore.load).toHaveBeenCalledWith(streamId);
      expect(eventStore.append).toHaveBeenCalledWith(
        streamId,
        "Incident",
        [expect.objectContaining({ eventType: c.expectedType })],
        c.expectedVersion
      );
      expect(projection.projectSingle).toHaveBeenCalled();
    });
  });

  describe("Domain Error Propagation", () => {
    it("should throw if dispatching same vehicle twice", async () => {
      const history = [
        incidentEventFactory.build({ eventType: "IncidentOccurred" }),
        incidentEventFactory.build({ eventType: "VehicleDispatched", payload: { vehicleId: 1 } as any }),
      ];
      eventStore.load.mockResolvedValue(history as IncidentEvent[]);

      const command = { type: "DispatchVehicle", incidentId: "i1", vehicleId: 1, dispatchedAt: "..." };

      await expect(handler.handle(command as any)).rejects.toThrow("Vehicle already dispatched");
      expect(eventStore.append).not.toHaveBeenCalled();
    });
  });
});