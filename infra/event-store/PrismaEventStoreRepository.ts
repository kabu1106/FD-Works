 // infra/event-store/PrismaEventStoreRepository.ts
import { PrismaClient } from "@prisma/client";
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
    await this.prisma.$transaction(
      events.map((event, index) => {
        const payload = event as any;
        return this.prisma.eventStore.create({
          data: {
            aggregateId,
            aggregateType,
            // バージョンは 0 スタートの場合、1つ目は expectedVersion + 1 になる
            aggregateVersion: expectedVersion + index + 1, 
            eventType: payload.eventType,
            payload: payload,
            occurredAt: new Date(),
            causedBy: "command", 
            schemaVersion: 1,
          },
        });
      })
    );
  }
}