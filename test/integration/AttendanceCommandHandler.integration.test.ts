import { describe, it, expect, beforeEach } from "vitest";
import { prisma } from "@/test/prisma";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { AttendanceCommandHandler } from "@/domain/attendance/attendanceCommandHandlers";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";
import { randomUUID } from "crypto";

describe("AttendanceCommandHandler Integration", () => {
  const repository = new PrismaEventStoreRepository(prisma);
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
      at: new Date("2026-02-01T09:00:00Z").toDateString(),
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
      at: new Date("2026-02-01T09:00:00Z").toDateString(),
    });

    await handler.handle({
      type: "StartBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T12:00:00Z").toDateString(),
    });

    await handler.handle({
      type: "EndBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T13:00:00Z").toDateString(),
    });

    await handler.handle({
      type: "EndWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T18:00:00Z").toDateString(),
    });

    const events = await prisma.eventStore.findMany({
      where: { aggregateId: streamId },
      orderBy: { aggregateVersion: "asc" },
    });

    expect(events).toHaveLength(4);
    expect(events.map(e => e.aggregateVersion)).toEqual([1,2,3,4]);
  });

  it("should throw OptimisticLockError on concurrent update", async () => {
    // 初期状態
    await handler.handle({
      type: "StartWork",
      dutyId,
      staffId,
      at: new Date("2026-02-01T09:00:00Z").toDateString(),
    });

    const repository2 = new PrismaEventStoreRepository(prisma);
    const handler2 = new AttendanceCommandHandler(repository2);

    // 並列で Break 開始
    const p1 = handler.handle({
      type: "StartBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T12:00:00Z").toDateString(),
    });

    const p2 = handler2.handle({
      type: "StartBreak",
      dutyId,
      staffId,
      at: new Date("2026-02-01T12:00:00Z").toDateString(),
    });

    const results = await Promise.allSettled([p1, p2]);

    const rejected = results.find(r => r.status === "rejected");

    expect(rejected).toBeDefined();
    expect((rejected as PromiseRejectedResult).reason)
      .toBeInstanceOf(OptimisticLockError);
  });
});