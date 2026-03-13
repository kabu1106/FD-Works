// src/infra/projection/shared/ProjectionWorker.ts

import { PrismaClient } from "@prisma/client";
import { IProjector } from "./IProjector";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { DomainEvent } from "@/domain/shared/domainEventrt";

export class ProjectionWorker {

  constructor(
    private readonly prisma: PrismaClient,
    private readonly projectors: IProjector<DomainEvent>[],
    private readonly batchSize: number = 100
  ) {}

  async runOnce(): Promise<void> {
    for (const projector of this.projectors) {
      await this.runProjector(projector);
    }
  }

  private async runProjector(projector: IProjector<DomainEvent>) {

    const checkpoint = await this.prisma.projectionCheckpoint.findUnique({
      where: { projectionName: projector.name }
    });

    const lastEventId = checkpoint?.lastEventId ?? 0;

    const events = await this.prisma.eventStore.findMany({
      where: {
        id: {
          gt: lastEventId as string
        }
      },
      orderBy: {
        id: "asc"
      },
      take: this.batchSize
    });

    if (events.length === 0) return;


    const eventEnvelopes: EventEnvelope<DomainEvent>[] = events.map((e) => ({
        eventId: e.id,
        aggregateId: e.aggregateId,
        aggregateType: e.aggregateType,
        aggregateVersion: e.aggregateVersion,
      
        event: {
          eventType: e.eventType,
          payload: e.payload
        } as DomainEvent,
      
        occurredAt: e.occurredAt.toISOString(),
        causedBy: e.causedBy,
        schemaVersion: e.schemaVersion
      }))

    await projector.project(eventEnvelopes);

    const newCheckpoint = events[events.length - 1].id;

    await this.prisma.projectionCheckpoint.upsert({
      where: { projectionName: projector.name },
      create: {
        projectionName: projector.name,
        lastEventId: newCheckpoint,
        lastEventAt: new Date()
      },
      update: {
        lastEventId: newCheckpoint
      }
    });
  }

}