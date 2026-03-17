// src/infra/projection/incident/IncidentProjector.ts

import { PrismaClient } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { IncidentEventDTO } from "@/domain/incident/incidentEventSchema";
import { IncidentProjection } from "@/projections/incident/incidentProjection";
import {
  createInitialIncidentState,
  IncidentState
} from "@/projections/incident/IncidentState";

export class IncidentProjector implements IProjector<IncidentEventDTO> {

  readonly name = "IncidentReadModel";

  private projection = new IncidentProjection();

  constructor(private readonly prisma: PrismaClient) {}

  async project(events: EventEnvelope<IncidentEventDTO>[]): Promise<void> {

    const grouped = this.groupByIncident(events);

    for (const [incidentId, stream] of Object.entries(grouped)) {

      await this.prisma.$transaction(async (tx) => {

        let state: IncidentState = createInitialIncidentState();

        for (const envelope of stream) {
          state = this.projection.project(state, envelope.event);
        }

        // incident
        await tx.incidentReadModel.deleteMany({
          where: { id: incidentId }
        });

        if (state.incident) {
          await tx.incidentReadModel.create({
            data: {
              id: state.incident.id,
              dutyId: state.incident.dutyId,
              locationId: state.incident.locationId,
              occurredAt: new Date(state.incident.occurredAt),
              status: state.incident.status,
              closedAt: state.incident.closedAt
                ? new Date(state.incident.closedAt)
                : null
            }
          });
        }

        // vehicles
        await tx.dispatchedVehicle.deleteMany({
          where: { incidentId }
        });

        for (const vehicle of state.vehicles) {

          const created = await tx.dispatchedVehicle.create({
            data: {
              incidentId,
              vehicleId: vehicle.vehicleId,
              dispatchedAt: new Date(vehicle.dispatchedAt),
              returnedAt: vehicle.returnedAt
                ? new Date(vehicle.returnedAt)
                : null
            }
          });

          for (const staffId of vehicle.staffIds) {
            await tx.staffInVehicle.create({
              data: {
                dispatchedVehicleId: created.id,
                staffId
              }
            });
          }
        }

      });

    }
  }

  private groupByIncident(events: EventEnvelope<IncidentEventDTO>[]) {

    return events.reduce((acc, envelope) => {

      const incidentId = envelope.event.payload.incidentId;

      if (!acc[incidentId]) {
        acc[incidentId] = [];
      }

      acc[incidentId].push(envelope);

      return acc;

    }, {} as Record<string, EventEnvelope<IncidentEventDTO>[]>);

  }
}