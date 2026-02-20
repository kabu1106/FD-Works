import { describe, it, expect, beforeEach } from "vitest";
import { AggregateRoot } from "@/domain/shared/AggregateRoot";
import type { EventBase } from "@/domain/shared/base";

/**
 * Test Event Type
 */
type TestEvent = EventBase<"TestEvent", { value: number }>;

/**
 * Test Aggregate
 */
class TestAggregate extends AggregateRoot<TestEvent> {
  public appliedPayloads: { value: number }[] = [];
  aggregateType = "TestAggregate"
  protected when(event: TestEvent): void {
    this.appliedPayloads.push(event.payload);
  }

  public applyEvent(event: TestEvent, isReplay = false): void {
    this.apply(event, isReplay);
  }

  public getVersion(): number {
    return this.version;
  }
}

describe("AggregateRoot", () => {
  let aggregate: TestAggregate;

  beforeEach(() => {
    aggregate = new TestAggregate();
  });

  const createEvent = (value: number): TestEvent => ({
    eventType: "TestEvent",
    payload: { value },
  });

  it("should call when() and add event to uncommittedEvents", () => {
    const event = createEvent(1);

    aggregate.applyEvent(event);

    expect(aggregate.appliedPayloads).toEqual([{ value: 1 }]);
    expect(aggregate.uncommittedEvents).toHaveLength(1);
    expect(aggregate.uncommittedEvents[0]).toBe(event);
    expect(aggregate.getVersion()).toBe(1);
  });

  it("should not add event to uncommittedEvents when replaying", () => {
    const event = createEvent(2);

    aggregate.applyEvent(event, true);

    expect(aggregate.appliedPayloads).toEqual([{ value: 2 }]);
    expect(aggregate.uncommittedEvents).toHaveLength(0);
    expect(aggregate.getVersion()).toBe(1);
  });

  it("should increment version for each applied event", () => {
    aggregate.applyEvent(createEvent(1));
    aggregate.applyEvent(createEvent(2));

    expect(aggregate.getVersion()).toBe(2);
  });

  it("should clear uncommittedEvents", () => {
    aggregate.applyEvent(createEvent(1));
    aggregate.applyEvent(createEvent(2));

    expect(aggregate.uncommittedEvents).toHaveLength(2);

    aggregate.clearEvents();

    expect(aggregate.uncommittedEvents).toHaveLength(0);
  });
});
