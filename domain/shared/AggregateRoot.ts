// src/domain/shared/AggregateRoot.ts
import { EventBase } from "./base";

export abstract class AggregateRoot<TEvent extends EventBase<string, any>> {
  private _uncommittedEvents: TEvent[] = [];
  protected version = 0;

  protected apply(event: TEvent, isReplay = false) {
    this.when(event);
    if (!isReplay) {
      this._uncommittedEvents.push(event);
    }
    this.version++;
  }

  get uncommittedEvents(): TEvent[] {
    return this._uncommittedEvents;
  }

  clearEvents() {
    this._uncommittedEvents = [];
  }

  protected abstract when(event: TEvent): void;
}
