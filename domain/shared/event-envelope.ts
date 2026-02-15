import { DomainEvent } from "./domainEventrt";

export interface EventEnvelope<
  TEvent extends DomainEvent = DomainEvent
> {
  eventId: string;
  aggregateId: string;
  aggregateType: string;
  occurredAt: string;
  event: TEvent;
  causedBy: string;
  aggregateVersion: number;
  schemaVersion: number;
}
