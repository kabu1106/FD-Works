// src/infra/projection/incident/IncidentProjector.ts
import { EventStore, PrismaClient, IncidentStatus } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { IncidentEvent } from "@/domain/incident/incident-events";

/**
 * IncidentReadModel への投影を担うプロジェクター
 * EventStore のイベント群を読み取り最適化モデルへ変換する
 */
export class IncidentProjector implements IProjector {
  readonly name = "IncidentReadModel";
  // ↓ この constructor を追加してください
  constructor(private readonly prisma: PrismaClient) {}

  // IProjector インターフェース用（バックグラウンドワーカーが使用）
  async project(events: EventStore[]): Promise<void> {
    for (const event of events) {
      // EventStore型からドメインイベントを取り出して適用
      await this.applyEvent(event.payload as unknown as IncidentEvent);
    }
  }

  // ★ 新設: CommandHandlerから「単一のドメインイベント」を受け取るためのメソッド
  async projectSingle(event: IncidentEvent): Promise<void> {
    await this.applyEvent(event);
  }

  private async applyEvent(event: IncidentEvent): Promise<void> {
    const { eventType, payload } = event;

    await this.prisma.$transaction(async (tx) => {
      switch (eventType) {
        case "IncidentOccurred":
          await tx.incidentReadModel.upsert({
            where: { id: payload.incidentId },
            create: {
              id: payload.incidentId,
              dutyId: payload.dutyId,
              locationId: payload.locationId,
              occurredAt: new Date(payload.occurredAt),
              status: "OPEN",
            },
            update: {
              dutyId: payload.dutyId,
              locationId: payload.locationId,
              occurredAt: new Date(payload.occurredAt),
            },
          });
          break;

        case "VehicleDispatched":
          await tx.dispatchedVehicle.upsert({
            where: {
              incidentId_vehicleId: {
                incidentId: payload.incidentId,
                vehicleId: payload.vehicleId,
              },
            },
            create: {
              incidentId: payload.incidentId,
              vehicleId: payload.vehicleId,
              dispatchedAt: new Date(payload.dispatchedAt),
            },
            update: {
              dispatchedAt: new Date(payload.dispatchedAt),
            },
          });
          break;

        case "StaffBoarded":
          // 車両が存在することを前提とするが、upsertで不整合を防止
          // parentId (DispatchedVehicle) を取得するために findUniqueOrThrow を利用
          const vehicle = await tx.dispatchedVehicle.findUniqueOrThrow({
            where: {
              incidentId_vehicleId: {
                incidentId: payload.incidentId,
                vehicleId: payload.vehicleId,
              },
            },
          });

          await tx.staffInVehicle.upsert({
            where: {
              dispatchedVehicleId_staffId: {
                dispatchedVehicleId: vehicle.id,
                staffId: payload.staffId,
              },
            },
            create: {
              dispatchedVehicleId: vehicle.id,
              staffId: payload.staffId,
            },
            update: {}, // すでに登録済みの場合は変更なし
          });
          break;

        case "VehicleReturned":
          await tx.dispatchedVehicle.update({
            where: {
              incidentId_vehicleId: {
                incidentId: payload.incidentId,
                vehicleId: payload.vehicleId,
              },
            },
            data: {
              returnedAt: new Date(payload.returnedAt),
            },
          });
          break;

        case "IncidentClosed":
          await tx.incidentReadModel.update({
            where: { id: payload.incidentId },
            data: {
              status: "CLOSED",
              closedAt: new Date(payload.closedAt),
            },
          });
          break;

        default:
          // TypeScript の網羅性チェック。新しいイベントが追加された際にコンパイルエラーにする
          const _exhaustiveCheck: never = event;
          break;
      }
    });
  }
}