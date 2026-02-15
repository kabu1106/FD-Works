// src/projections/duty/DutyProjector.ts
import { PrismaClient, ScheduleStatus } from "@prisma/client";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

export class DutyProjector {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 単一のドメインイベントを投影する
   */
  async projectSingle(event: DutyEventDTO): Promise<void> {
    switch (event.eventType) {
      case "DutyCreated":
        await this.prisma.duty.upsert({
          where: { id: event.payload.dutyId },
          update: {
            date: new Date(event.payload.date),
            teamId: event.payload.teamId,
          },
          create: {
            id: event.payload.dutyId,
            date: new Date(event.payload.date),
            teamId: event.payload.teamId,
            status: "UNAPPROVED",
          },
        });
        break;

      case "StaffAssignedToDuty":
        // dutiesテーブルへの紐付けは後続のWorkGroupAssignmentで行われるため、
        // ここでは必要に応じてログ出力や、別の読み取り専用テーブルがあれば更新
        break;

      case "StaffUnassignedFromDuty":
        // 割り当て解除時は WorkGroupAssignment から削除
        await this.prisma.workGroupAssignment.deleteMany({
          where: {
            dutyId: event.payload.dutyId,
            staffId: event.payload.staffId,
          },
        });
        break;

      case "WorkGroupAssignedToStaff":
      case "WorkGroupAssignmentChanged":
        // ワークグループの割り当てまたは変更
        await this.prisma.workGroupAssignment.upsert({
          where: {
            dutyId_staffId: {
              dutyId: event.payload.dutyId,
              staffId: event.payload.staffId,
            },
          },
          update: {
            workGroupId: (event.payload as any).newWorkGroupId ?? (event.payload as any).workGroupId,
          },
          create: {
            dutyId: event.payload.dutyId,
            staffId: event.payload.staffId,
            workGroupId: (event.payload as any).workGroupId,
          },
        });
        break;

      case "DutyApproved":
        await this.prisma.duty.update({
          where: { id: event.payload.dutyId },
          data: { status: "APPROVED" },
        });
        break;

      case "DutyApprovalRevoked":
        await this.prisma.duty.update({
          where: { id: event.payload.dutyId },
          data: { status: "UNAPPROVED" },
        });
        break;

      case "DutyLocked":
        await this.prisma.duty.update({
          where: { id: event.payload.dutyId },
          data: {
            isLocked: true,
            lockedAt: new Date(),
          },
        });
        break;

      case "DutyMarkedForRecalculation":
        // 再計算マーク時はロックを外すなどの処理（要件に応じて）
        await this.prisma.duty.update({
          where: { id: event.payload.dutyId },
          data: { isLocked: false },
        });
        break;
    }
  }
}