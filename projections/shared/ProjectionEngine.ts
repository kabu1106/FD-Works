// src/infra/projection/shared/ProjectionEngine.ts
import { PrismaClient } from "@prisma/client";
import { IProjector } from "./IProjector";

export class ProjectionEngine {
  constructor(private readonly prisma: PrismaClient) {}

  async run(projector: IProjector) {
    // 1. 最後に処理したチェックポイントを取得
    const checkpoint = await this.prisma.projectionCheckpoint.findUnique({
      where: { projectionName: projector.name },
    });

    // 2. 未処理のイベントをEventStoreから取得
    const events = await this.prisma.eventStore.findMany({
      where: checkpoint 
        ? { createdAt: { gt: checkpoint.lastEventAt } } // 基本は時間で追従
        : {},
      orderBy: { createdAt: "asc" },
      take: 100, // バッチサイズを制限
    });

    if (events.length === 0) return;

    // 3. プロジェクターを実行
    await projector.project(events);

    // 4. チェックポイントを更新
    const lastEvent = events[events.length - 1];
    await this.prisma.projectionCheckpoint.upsert({
      where: { projectionName: projector.name },
      create: {
        projectionName: projector.name,
        lastEventId: lastEvent.id,
        lastEventAt: lastEvent.createdAt,
      },
      update: {
        lastEventId: lastEvent.id,
        lastEventAt: lastEvent.createdAt,
      },
    });
  }
}