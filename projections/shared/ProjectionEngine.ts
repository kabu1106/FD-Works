// src/infra/projection/shared/ProjectionEngine.ts
import { PrismaClient } from "@prisma/client";
import { IProjector } from "./IProjector";

export class ProjectionEngine {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly maxProjectionRetries: number = 3
  ) {}

  async run(projector: IProjector) {
    for (let attempt = 1; attempt <= this.maxProjectionRetries; attempt++) {
      try {
        await this.projectNextBatch(projector);
        return;
      } catch (error) {
        if (attempt === this.maxProjectionRetries) throw error;
        await this.wait(20 * attempt);
      }
    }
  }

  private async projectNextBatch(projector: IProjector): Promise<void> {
    const checkpoint = await this.prisma.projectionCheckpoint.findUnique({
      where: { projectionName: projector.name },
    });

    const events = await this.prisma.eventStore.findMany({
      where: this.buildCursorWhere(checkpoint),
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
      take: 100,
    });

    if (events.length === 0) return;

    await projector.project(events);

    const lastEvent = events[events.length - 1];
    await this.prisma.projectionCheckpoint.upsert({
      where: { projectionName: projector.name },
      create: {
        projectionName: projector.name,
        lastEventId: lastEvent.id,
        lastEventAt: lastEvent.createdAt,
      },
      update: {
        lastEventId: lastEvent.id,
        lastEventAt: lastEvent.createdAt,
      },
    });
  }

  private buildCursorWhere(
    checkpoint: { lastEventAt: Date; lastEventId: string } | null
  ) {
    if (!checkpoint) {
      return {};
    }

    return {
      OR: [
        { createdAt: { gt: checkpoint.lastEventAt } },
        {
          AND: [
            { createdAt: checkpoint.lastEventAt },
            { id: { gt: checkpoint.lastEventId } },
          ],
        },
      ],
    };
  }

  private async wait(ms: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
