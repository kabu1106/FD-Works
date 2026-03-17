import { EventEnvelope } from "@/domain/shared/event-envelope";
import { DomainEvent } from "@/domain/shared/domainEventrt";

export interface IProjector<TEvent extends DomainEvent> {
  name: string;
  project(events: EventEnvelope<TEvent>[]): Promise<void>;
}