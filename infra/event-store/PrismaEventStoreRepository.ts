// infra/event-store/PrismaEventStoreRepository.ts
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";
import { Prisma, PrismaClient } from "@prisma/client";
import { EventStoreRepository } from "./EventStoreRepository"; // interface の方

export class PrismaEventStoreRepository<T> implements EventStoreRepository<T> {
  constructor(private readonly prisma: PrismaClient) {}

  async load(aggregateId: string): Promise<T[]> {
    const records = await this.prisma.eventStore.findMany({
      where: { aggregateId },
      orderBy: { aggregateVersion: "asc" },
    });
    return records.map(r => r.payload as unknown as T);
  }

  async append(
    aggregateId: string,
    aggregateType: string,
    events: T[],
    expectedVersion: number
  ): Promise<void> {
    try {
      await this.prisma.$transaction(async (tx) => {
        const latest = await tx.eventStore.findFirst({
          where: { aggregateId },
          orderBy: { aggregateVersion: "desc" },
          select: { aggregateVersion: true },
        });

        const currentVersion = latest?.aggregateVersion ?? 0;
        if (currentVersion !== expectedVersion) {
          throw new OptimisticLockError(
            aggregateId,
            expectedVersion,
            currentVersion
          );
        }

        for (const [index, event] of events.entries()) {
          const payload = event as { eventType?: string };

          await tx.eventStore.create({
            data: {
              aggregateId,
              aggregateType,
              aggregateVersion: expectedVersion + index + 1,
              eventType: payload.eventType ?? "UnknownEvent",
              payload: payload,
              occurredAt: new Date(),
              causedBy: "command",
              schemaVersion: 1,
            },
          });
        }
      });
    } catch (error) {
      if (this.isUniqueConstraintError(error)) {
        const latest = await this.prisma.eventStore.findFirst({
          where: { aggregateId },
          orderBy: { aggregateVersion: "desc" },
          select: { aggregateVersion: true },
        });
        throw new OptimisticLockError(
          aggregateId,
          expectedVersion,
          latest?.aggregateVersion ?? 0
        );
      }

      throw error;
    }
  }

  private isUniqueConstraintError(
    error: unknown
  ): error is Prisma.PrismaClientKnownRequestError {
    return (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    );
  }
}
