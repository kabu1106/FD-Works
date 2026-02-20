import { describe, it, expect, beforeEach, vi } from "vitest";
import { IncidentProjector } from "@/projections/incident/incidentProjector";
import { eventStoreFactory } from "@/test/factories/eventStore.factory";

describe("IncidentProjector (Clean Setup)", () => {
  let projector: IncidentProjector;
  let mockPrisma: any;

  beforeEach(() => {
    // インメモリの簡易ストアを使う Prisma もどきを作る
    const store = new Map<string, any>();

    mockPrisma = {
      incidentReadModel: {
        upsert: vi.fn(async ({ where, create, update }) => {
          const existing = store.get(where.id);
          const value = existing ? { ...existing, ...update } : create;
          store.set(where.id, value);
          return value;
        }),
        findUnique: vi.fn(async ({ where }) => {
          return store.get(where.id) ?? null;
        }),
      },
      // $transaction は単にコールバックを同期実行するだけのラッパーで十分
      $transaction: vi.fn(async (fn: (tx: any) => Promise<any>) => {
        return fn(mockPrisma);
      }),
    };

    projector = new IncidentProjector(mockPrisma);
  });

  it("インシデント発生を投影できる", async () => {
    const event = eventStoreFactory.build();
    
    // projector が undefined にならないよう担保される
    await projector.project([event]);

    const result = await mockPrisma.incidentReadModel.findUnique({
      where: { id: event.aggregateId },
    });
    
    expect(result).not.toBeNull(); // findUnique は見つからないと null を返すため
    expect(result?.id).toBe(event.aggregateId);
  });
});