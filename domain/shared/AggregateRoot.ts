import type { EventBase } from "./base";

export abstract class AggregateRoot<
  TEvent extends EventBase<string, any>
> {
  private _uncommittedEvents: TEvent[] = [];
  protected version = 0;

  protected abstract readonly aggregateType: string;

  protected apply(event: TEvent, isReplay = false): void {
    this.when(event);

    if (!isReplay) {
      this._uncommittedEvents.push(event);
    }

    this.version++;
  }

  public loadFromHistory(events: TEvent[]): void {
    for (const event of events) {
      this.apply(event, true);
    }
  }

  public getVersion(): number {
    return this.version;
  }

  public getAggregateType(): string {
    return this.aggregateType;
  }

  public get uncommittedEvents(): readonly TEvent[] {
    return this._uncommittedEvents;
  }

  public clearEvents(): void {
    this._uncommittedEvents = [];
  }

  protected abstract when(event: TEvent): void;
}
