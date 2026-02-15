import { EventEnvelope } from "@/domain/shared/event-envelope";
import { randomUUID } from "crypto";
import { EventStoreRepository } from "./EventStoreRepository";
import { DomainEvent } from "@/domain/shared/domainEventrt";
import { OptimisticLockError } from '@/domain/errors/OptimisticLockError';

export class InMemoryEventStoreRepository<TEvent extends DomainEvent>
  implements EventStoreRepository<TEvent>
{
  private readonly store = new Map<string, EventEnvelope<TEvent>[]>();

  async append(
    streamId: string,
    aggregateType: string,
    events: readonly TEvent[],
    expectedVersion: number
  ): Promise<void> {
    const stream = this.store.get(streamId) ?? [];
  
    const currentVersion =
      stream.length > 0
        ? stream[stream.length - 1].aggregateVersion
        : 0;
  
    if (currentVersion !== expectedVersion) {
      throw new OptimisticLockError(
        streamId,
        expectedVersion,
        currentVersion,
      );
    }
  
    const newEnvelopes = events.map((event, index) => ({
      eventId: crypto.randomUUID(),
      aggregateId: streamId,
      aggregateType,
      occurredAt: new Date().toISOString(),
      event,
      causedBy: "system",
      aggregateVersion: currentVersion + index + 1,
      schemaVersion: 1,
    }));
  
    this.store.set(streamId, [...stream, ...newEnvelopes]);
  }
  

  async load(streamId: string): Promise<TEvent[]> {
    const stream = this.store.get(streamId) ?? [];
    return stream.map((e) => e.event);
  }
}
