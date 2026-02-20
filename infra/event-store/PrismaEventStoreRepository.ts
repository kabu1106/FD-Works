// infra/event-store/PrismaEventStoreRepository.ts

import { PrismaClient, Prisma } from "@prisma/client";
import { EventStoreRepository } from "./EventStoreRepository";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";

export class PrismaEventStoreRepository<T>
  implements EventStoreRepository<T>
{
  constructor(private readonly prisma: PrismaClient) {}

  async load(aggregateId: string): Promise<T[]> {
    const records = await this.prisma.eventStore.findMany({
      where: { aggregateId },
      orderBy: { aggregateVersion: "asc" },
    });

    return records.map((r) => ({
      eventType: r.eventType,
      aggregateId: r.aggregateId,
      payload: r.payload,
    }) as T);
    
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
        });
  
        const currentVersion = latest?.aggregateVersion ?? 0;
  
        // ✅ 3引数で投げる
        if (currentVersion !== expectedVersion) {
          throw new OptimisticLockError(
            aggregateId,
            expectedVersion,
            currentVersion
          );
        }
  
        for (let i = 0; i < events.length; i++) {
          const event = events[i] as any;
          
          await tx.eventStore.create({
            data: {
              aggregateId,
              aggregateType,
              aggregateVersion: expectedVersion + i + 1,
              eventType: event.eventType,
              payload: event.payload,
              occurredAt: new Date(),
              causedBy: "command",
              schemaVersion: 1,
            },
          });
        }
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        // ✅ ここも3引数
        throw new OptimisticLockError(
          aggregateId,
          expectedVersion,
          expectedVersion + 1 // 実際の衝突はこの付近
        );
      }
  
      throw err;
    }
  }
  
}
