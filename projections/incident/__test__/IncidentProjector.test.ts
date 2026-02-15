// src/infra/projection/incident/IncidentProjector.test.ts
import { describe, it, expect } from "vitest";
import { prismaTest } from "@/test/prisma"; // 共通インスタンスを使用
import { IncidentProjector } from "../incidentProjector";
import { eventStoreFactory } from "@/test/factories/eventStore.factory";

describe("IncidentProjector (Clean Setup)", () => {
  // セットアップは setup.ts が自動で行うため、ロジックに集中できる
  const projector = new IncidentProjector(prismaTest);

  it("インシデント発生を投影できる", async () => {
    const event = eventStoreFactory.build();
    await projector.project([event]);

    const result = await prismaTest.incidentReadModel.findUnique({
      where: { id: event.aggregateId },
    });
    expect(result).toBeDefined();
  });
});