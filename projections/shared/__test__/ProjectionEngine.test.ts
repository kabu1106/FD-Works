import { describe, it, expect, vi } from "vitest";
import { PrismaClient } from "@prisma/client";
import { ProjectionEngine } from "@/projections/shared/ProjectionEngine";
import { IProjector } from "@/projections/shared/IProjector";

describe("ProjectionEngine", () => {
  it("createdAt + id の厳密カーソル条件で未処理イベントを取得する", async () => {
    const checkpoint = {
      projectionName: "Dummy",
      lastEventId: "e-10",
      lastEventAt: new Date("2026-01-01T00:00:00.000Z"),
      updatedAt: new Date("2026-01-01T00:00:00.000Z"),
    };

    const events = [
      {
        id: "e-11",
        createdAt: new Date("2026-01-01T00:00:00.000Z"),
      },
    ];

    const prisma = {
      projectionCheckpoint: {
        findUnique: vi.fn().mockResolvedValue(checkpoint),
        upsert: vi.fn().mockResolvedValue(undefined),
      },
      eventStore: {
        findMany: vi.fn().mockResolvedValue(events),
      },
      $transaction: vi.fn(async (fn) => fn(prisma)),
    } as unknown as PrismaClient;

    const projector: IProjector = {
      name: "Dummy",
      project: vi.fn().mockResolvedValue(undefined),
    };

    const engine = new ProjectionEngine(prisma, 1);
    await engine.run(projector);

    const callArg = (prisma.eventStore.findMany as any).mock.calls[0][0];
    expect(callArg.where).toEqual({
      OR: [
        { createdAt: { gt: checkpoint.lastEventAt } },
        {
          AND: [
            { createdAt: checkpoint.lastEventAt },
            { id: { gt: checkpoint.lastEventId } },
          ],
        },
      ],
    });
    expect(callArg.orderBy).toEqual([{ createdAt: "asc" }, { id: "asc" }]);
  });

  it("投影失敗時にリトライして成功したら処理を継続する", async () => {
    const prisma = {
      projectionCheckpoint: {
        findUnique: vi
          .fn()
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(null),
        upsert: vi.fn().mockResolvedValue(undefined),
      },
      eventStore: {
        findMany: vi
          .fn()
          .mockResolvedValueOnce([{ id: "e-1", createdAt: new Date() }])
          .mockResolvedValueOnce([{ id: "e-1", createdAt: new Date() }])
          .mockResolvedValueOnce([]),
      },
      $transaction: vi.fn(async (fn) => fn(prisma)),
    } as unknown as PrismaClient;

    const projector: IProjector = {
      name: "RetryProjector",
      project: vi
        .fn()
        .mockRejectedValueOnce(new Error("temporary"))
        .mockResolvedValueOnce(undefined),
    };

    const engine = new ProjectionEngine(prisma, 2);
    await engine.run(projector);

    expect(projector.project).toHaveBeenCalledTimes(2);
  });
});
