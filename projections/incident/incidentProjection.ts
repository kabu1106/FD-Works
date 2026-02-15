// src/infra/projection/incident/IncidentProjection.ts
import { PrismaClient } from "@prisma/client";
import { IncidentEvent } from "@/domain/incident/incident-events";

export class IncidentProjection {
  constructor(private readonly prisma: PrismaClient) {}

  async project(event: IncidentEvent): Promise<void> {
    const { eventType, payload } = event;

    switch (eventType) {
      case "IncidentOccurred":
        await this.prisma.incidentReadModel.upsert({
          where: { id: payload.incidentId },
          update: {
            dutyId: payload.dutyId,
            locationId: payload.locationId,
            occurredAt: new Date(payload.occurredAt),
            status: "OPEN",
          },
          create: {
            id: payload.incidentId,
            dutyId: payload.dutyId,
            locationId: payload.locationId,
            occurredAt: new Date(payload.occurredAt),
            status: "OPEN",
          },
        });
        break;

      case "VehicleDispatched":
        await this.prisma.dispatchedVehicle.create({
          data: {
            incidentId: payload.incidentId,
            vehicleId: payload.vehicleId,
            dispatchedAt: new Date(payload.dispatchedAt),
          },
        });
        break;

      case "StaffBoarded":
        // 車両レコードを特定してスタッフを紐付け
        const vehicle = await this.prisma.dispatchedVehicle.findUnique({
          where: {
            incidentId_vehicleId: {
              incidentId: payload.incidentId,
              vehicleId: payload.vehicleId,
            },
          },
        });

        if (vehicle) {
          await this.prisma.staffInVehicle.create({
            data: {
              dispatchedVehicleId: vehicle.id,
              staffId: payload.staffId,
            },
          });
        }
        break;

      case "VehicleReturned":
        await this.prisma.dispatchedVehicle.update({
          where: {
            incidentId_vehicleId: {
              incidentId: payload.incidentId,
              vehicleId: payload.vehicleId,
            },
          },
          data: {
            returnedAt: new Date(payload.returnedAt),
          },
        });
        break;

      case "IncidentClosed":
        await this.prisma.incidentReadModel.update({
          where: { id: payload.incidentId },
          data: {
            status: "CLOSED",
            closedAt: new Date(payload.closedAt),
          },
        });
        break;

      default:
        const _exhaustiveCheck: never = event;
        throw new Error(`Unhandled event type: ${eventType}`);
    }
  }
}