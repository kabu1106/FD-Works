// src/test/integration/IncidentIntegration.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db/prisma";
import { IncidentCommandHandler } from "@/domain/incident/IncidentCommandHandler";
import { IncidentProjector } from "@/projections/incident/IncidentProjector";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { IncidentEventDTO } from "@/domain/incident/incidentEventSchema";

describe("Incident Domain Integration Test", () => {
  let handler: IncidentCommandHandler;
  let eventStore: EventStoreRepository<IncidentEventDTO>;
  let projector: IncidentProjector;

  let dutyId: string;
  let incidentId: string;
  let locationId: number;
  let vehicleId: number;
  let staffId: number;

  beforeEach(async () => {
    // ランダムだが一意性をほぼ担保できるID群
    dutyId = randomUUID();
    incidentId = randomUUID();
    locationId = Math.floor(Math.random() * 1_000_000);
    vehicleId = Math.floor(Math.random() * 1_000_000);
    staffId = Math.floor(Math.random() * 1_000_000);

    // Vehicle は DispatchedVehicle の外部キー制約に必要なため事前に作成しておく
    await prisma.vehicle.create({
      data: {
        id: vehicleId,
        code: `V-${vehicleId}`,
        name: `Vehicle-${vehicleId}`,
      },
    });

    eventStore = new PrismaEventStoreRepository<IncidentEventDTO>(prisma);
    projector = new IncidentProjector(prisma);
    handler = new IncidentCommandHandler(eventStore, projector);
  });

  it("インシデントの発生から車両出動・職員搭乗・帰隊・クローズまでが読み取りモデルに反映されること", async () => {
    const occurredAt = "2025-10-01T10:00:00Z";
    const dispatchedAt = "2025-10-01T10:05:00Z";
    const returnedAt = "2025-10-01T11:00:00Z";
    const closedAt = "2025-10-01T11:30:00Z";

    // 1. インシデント発生
    await handler.handle({
      type: "ReportIncident",
      incidentId,
      dutyId,
      locationId,
      occurredAt,
    });

    const readAfterOccurred = await prisma.incidentReadModel.findUnique({
      where: { id: incidentId },
    });

    expect(readAfterOccurred).not.toBeNull();
    expect(readAfterOccurred?.status).toBe("OPEN");
    expect(readAfterOccurred?.dutyId).toBe(dutyId);
    expect(readAfterOccurred?.locationId).toBe(locationId);

    // 2. 車両出動
    await handler.handle({
      type: "DispatchVehicle",
      incidentId,
      vehicleId,
      dispatchedAt,
    });

    const dispatchedVehicle = await prisma.dispatchedVehicle.findUnique({
      where: {
        incidentId_vehicleId: {
          incidentId,
          vehicleId,
        },
      },
    });

    expect(dispatchedVehicle).not.toBeNull();
    expect(dispatchedVehicle?.dispatchedAt.toISOString()).toBe(
      new Date(dispatchedAt).toISOString()
    );

    // 3. 職員搭乗
    await handler.handle({
      type: "BoardStaff",
      incidentId,
      vehicleId,
      staffId,
    });

    const staffInVehicle = await prisma.staffInVehicle.findUnique({
      where: {
        dispatchedVehicleId_staffId: {
          dispatchedVehicleId: dispatchedVehicle!.id,
          staffId,
        },
      },
    });

    expect(staffInVehicle).not.toBeNull();
    expect(staffInVehicle?.staffId).toBe(staffId);

    // 4. 車両帰隊
    await handler.handle({
      type: "ReturnVehicle",
      incidentId,
      vehicleId,
      returnedAt,
    });

    const returnedVehicle = await prisma.dispatchedVehicle.findUnique({
      where: {
        incidentId_vehicleId: {
          incidentId,
          vehicleId,
        },
      },
    });

    expect(returnedVehicle?.returnedAt?.toISOString()).toBe(
      new Date(returnedAt).toISOString()
    );

    // 5. インシデントクローズ
    await handler.handle({
      type: "CloseIncident",
      incidentId,
      closedAt,
    });

    const readAfterClosed = await prisma.incidentReadModel.findUnique({
      where: { id: incidentId },
    });

    expect(readAfterClosed?.status).toBe("CLOSED");
    expect(readAfterClosed?.closedAt?.toISOString()).toBe(
      new Date(closedAt).toISOString()
    );

    // 6. EventStore の履歴も期待どおりか確認
    const history = await eventStore.load(`incident-${incidentId}`);
    expect(history.length).toBe(5); // Occurred, Dispatched, Boarded, Returned, Closed
    expect(history[0].eventType).toBe("IncidentOccurred");
  });
});

