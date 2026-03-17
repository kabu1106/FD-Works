import { describe, it, expect, beforeEach } from "vitest";
import { prisma } from "@/test/prisma";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { AttendanceCommandHandler } from "@/domain/attendance/attendanceCommandHandlers";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";
import { randomUUID } from "crypto";
import { AttendanceEvent } from "@/domain/attendance/attendance-events";
import { AttendanceAggregate } from "@/domain/attendance/attendanceAggregate";

describe("AttendanceCommandHandler Integration", () => {
  const repository = new PrismaEventStoreRepository<AttendanceEvent>(prisma);
  const handler = new AttendanceCommandHandler(repository);

  const dutyId = randomUUID();
  const staffId = Math.floor(Math.random() * 1000000);
  const streamId = `attendance-${dutyId}-${staffId}`;

  beforeEach(async () => {
    await prisma.eventStore.deleteMany({
      where: { aggregateId: streamId },
    });
  });

  it("should persist StartWork event", async () => {
    await handler.handle({
      type: "StartWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T09:00:00Z").toISOString(),
    });

    const events = await prisma.eventStore.findMany({
      where: { aggregateId: streamId },
      orderBy: { aggregateVersion: "asc" },
    });

    expect(events).toHaveLength(1);
    expect(events[0].aggregateVersion).toBe(1);
    expect(events[0].eventType).toBe("WorkStarted");
  });

  it("should build full attendance lifecycle", async () => {
    await handler.handle({
      type: "StartWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T09:00:00Z").toISOString(),
    });

    await handler.handle({
      type: "StartBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T12:00:00Z").toISOString(),
    });

    await handler.handle({
      type: "EndBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T13:00:00Z").toISOString(),
    });

    await handler.handle({
      type: "EndWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T18:00:00Z").toISOString(),
    });

    const events = await prisma.eventStore.findMany({
      where: { aggregateId: streamId },
      orderBy: { aggregateVersion: "asc" },
    });

    expect(events).toHaveLength(4);
    expect(events.map(e => e.aggregateVersion)).toEqual([1,2,3,4]);
  });

  it("should throw OptimisticLockError on concurrent update", async () => {

    await handler.handle({
      type: "StartWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T09:00:00Z").toISOString(),
    });
  
    const repo1 = new PrismaEventStoreRepository<AttendanceEvent>(prisma);
    const repo2 = new PrismaEventStoreRepository<AttendanceEvent>(prisma);
  
    // 同じ履歴をロード
    const history1 = await repo1.load(streamId);
    const history2 = await repo2.load(streamId);
  
    const agg1 = new AttendanceAggregate();
    const agg2 = new AttendanceAggregate();
  
    agg1.loadFromHistory(history1);
    agg2.loadFromHistory(history2);
  
    agg1.startBreak(new Date().toISOString());
    agg2.startBreak(new Date().toISOString());
  
    const p1 = repo1.append(
      streamId,
      agg1.getAggregateType(),
      agg1.uncommittedEvents,
      agg1.getVersion()
    );
  
    const p2 = repo2.append(
      streamId,
      agg2.getAggregateType(),
      agg2.uncommittedEvents,
      agg2.getVersion()
    );
  
    const results = await Promise.allSettled([p1, p2]);
  
    const rejected = results.find(r => r.status === "rejected");
  
    expect(rejected).toBeDefined();
    expect((rejected as PromiseRejectedResult).reason)
      .toBeInstanceOf(OptimisticLockError);
  });
});