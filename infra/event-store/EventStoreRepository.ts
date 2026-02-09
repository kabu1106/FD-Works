// src/infra/eventStore/EventStoreRepository.ts
import { DutyEvent } from "@/domain/duty/duty-events";

export interface EventStoreRepository {
  load<TEvent>(aggregateId: string): Promise<TEvent[]>;
  append(
    aggregateId: string,
    aggregateType: string,
    events: unknown[]
  ): Promise<void>;
}
