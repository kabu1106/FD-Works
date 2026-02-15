import { describe, it, expect } from "vitest";
import { InMemoryEventStoreRepository } from "@/infra/event-store/in-memory-event-store";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";
import { AttendanceEvent } from "@/domain/attendance/attendance-events";

describe("EventStore optimistic lock", () => {
  it("古い version で append すると失敗する", async () => {
    const store =
      new InMemoryEventStoreRepository<AttendanceEvent>();

    const streamId = "attendance-d1-1";
    const aggregateType = "Attendance";

    const event: AttendanceEvent = {
      eventType: "WorkStarted",
      payload: {
        dutyId: "d1",
        staffId: 1,
        at: "2024-01-01T09:00:00Z",
      },
    };

    // 1回目: version 0 → 成功
    await store.append(streamId, aggregateType, [event], 0);

    // 2回目: まだ version 0 を渡す → 失敗するはず
    await expect(
      store.append(streamId, aggregateType, [event], 0)
    ).rejects.toBeInstanceOf(OptimisticLockError);
  });
});
