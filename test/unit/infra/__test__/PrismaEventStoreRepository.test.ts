import { describe, expect, it, vi } from "vitest";
import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";

describe("PrismaEventStoreRepository", () => {
  it("expectedVersion と現行versionが不一致なら OptimisticLockError", async () => {
    const prisma = {
      $transaction: vi.fn(async (fn) =>
        fn({
          eventStore: {
            findFirst: vi.fn().mockResolvedValue({ aggregateVersion: 5 }),
            create: vi.fn(),
          },
        })
      ),
    } as unknown as PrismaClient;

    const repo = new PrismaEventStoreRepository<any>(prisma);

    await expect(
      repo.append("a-1", "Incident", [{ eventType: "X" }], 4)
    ).rejects.toBeInstanceOf(OptimisticLockError);
  });

  it("P2002 を OptimisticLockError に変換する", async () => {
    const p2002 = new Prisma.PrismaClientKnownRequestError("duplicate", {
      code: "P2002",
      clientVersion: "test",
    });

    const prisma = {
      $transaction: vi.fn().mockRejectedValue(p2002),
      eventStore: {
        findFirst: vi.fn().mockResolvedValue({ aggregateVersion: 2 }),
      },
    } as unknown as PrismaClient;

    const repo = new PrismaEventStoreRepository<any>(prisma);

    await expect(
      repo.append("a-1", "Incident", [{ eventType: "X" }], 1)
    ).rejects.toBeInstanceOf(OptimisticLockError);
  });
});
