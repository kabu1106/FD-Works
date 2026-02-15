// src/infra/eventStore/EventStoreRepository.ts
import { DomainEvent } from "@/domain/shared/domainEventrt";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { randomUUID } from "crypto";

export interface EventStoreRepository<TEvent> {
  append(
    streamId: string,
    aggregateType: string,
    events: readonly TEvent[],
    expectedVersion: number
  ): Promise<void>;

  load(streamId: string): Promise<TEvent[]>;
}


