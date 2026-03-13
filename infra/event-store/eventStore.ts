// domain/event-store/event-store.ts
import { DomainEvent } from '@/domain/shared/domainEventrt'
import { EventEnvelope } from '@/domain/shared/event-envelope'

export interface EventStore<E extends DomainEvent> {
  append(
    aggregateId: string,
    aggregateType: string,
    expectedVersion: number,
    events: Omit<EventEnvelope<E>,
      | 'aggregateId'
      | 'aggregateType'
      | 'aggregateVersion'
    >[]
  ): Promise<EventEnvelope<E>[]>

  load(aggregateId: string): Promise<EventEnvelope<E>[]>
}
