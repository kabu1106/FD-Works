// src/infra/projection/duty/DutyProjector.ts

import { PrismaClient } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";
import { DutyProjection } from "@/projections/duty/DutyProjection";
import { createInitialDutyState, DutyState } from "@/projections/duty/DutyState";

export class DutyProjector implements IProjector<DutyEventDTO> {

  readonly name = "DutyProjection";

  private projection = new DutyProjection();

  constructor(private readonly prisma: PrismaClient) {}

  async project(events: EventEnvelope<DutyEventDTO>[]): Promise<void> {

    const grouped = this.groupByDuty(events);

    for (const [dutyId, stream] of Object.entries(grouped)) {

      await this.prisma.$transaction(async (tx) => {

        let state: DutyState = createInitialDutyState();

        for (const envelope of stream) {
          state = this.projection.project(state, envelope.event);
        }

        await tx.duty.deleteMany({
          where: { id: dutyId }
        });

        if (state.duty) {
          await tx.duty.create({
            data: {
              id: state.duty.id,
              date: new Date(state.duty.date),
              teamId: state.duty.teamId,
              status: state.duty.status,
              isLocked: state.duty.isLocked,
              lockedAt: state.duty.lockedAt
                ? new Date(state.duty.lockedAt)
                : null
            }
          });
        }

        await tx.workGroupAssignment.deleteMany({
          where: { dutyId }
        });

        for (const assignment of state.assignments) {
          await tx.workGroupAssignment.create({
            data: {
              dutyId: assignment.dutyId,
              staffId: assignment.staffId,
              workGroupId: assignment.workGroupId
            }
          });
        }

      });

    }
  }

  private groupByDuty(events: EventEnvelope<DutyEventDTO>[]) {

    return events.reduce((acc, envelope) => {

      const dutyId = envelope.event.payload.dutyId;

      if (!acc[dutyId]) {
        acc[dutyId] = [];
      }

      acc[dutyId].push(envelope);

      return acc;

    }, {} as Record<string, EventEnvelope<DutyEventDTO>[]>);

  }

}