import { describe, it, expect } from "vitest";
import { IncidentAggregate } from "@/domain/incident/IncidentAggregate";
import { InMemoryEventStoreRepository } from "@/infra/event-store/in-memory-event-store";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";

describe("Real optimistic concurrency (manual aggregate control)", () => {
  it("should throw OptimisticLockError when appending with stale version", async () => {
    const store = new InMemoryEventStoreRepository<IncidentEvent>();
    const streamId = "incident-i1";

    // 1️⃣ initial create
    const initial = IncidentAggregate.report(
      "i1",
      "d1",
      10,
      "2025-10-01T10:00:00Z"
    );

    await store.append(
      streamId,
      initial.getAggregateType(),
      initial.uncommittedEvents,
      0
    );

    // 2️⃣ simulate two concurrent loads
    const history = await store.load(streamId);

    const aggregateA = new IncidentAggregate();
    aggregateA.loadFromHistory(history);

    const aggregateB = new IncidentAggregate();
    aggregateB.loadFromHistory(history);

    // both version = 1
    const version = aggregateA.getVersion();

    // 3️⃣ A updates successfully
    aggregateA.dispatchVehicle(1, "2025-10-01T10:05:00Z");

    await store.append(
      streamId,
      aggregateA.getAggregateType(),
      aggregateA.uncommittedEvents,
      version
    );

    // 4️⃣ B tries with stale version
    aggregateB.dispatchVehicle(2, "2025-10-01T10:06:00Z");

    await expect(
      store.append(
        streamId,
        aggregateB.getAggregateType(),
        aggregateB.uncommittedEvents,
        version // stale
      )
    ).rejects.toBeInstanceOf(OptimisticLockError);
  });
});
