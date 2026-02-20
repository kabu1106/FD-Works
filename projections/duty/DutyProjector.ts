// src/projections/duty/DutyProjector.ts
import { Prisma, PrismaClient } from "@prisma/client";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

export class DutyProjector {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 単一のドメインイベントを投影する
   */
  async projectSingle(event: DutyEventDTO): Promise<void> {
    switch (event.eventType) {
      case "DutyCreated": {
        const dutyDate = new Date(event.payload.date);

        try {
          await this.prisma.duty.upsert({
            where: { id: event.payload.dutyId },
            update: {
              date: dutyDate,
              teamId: event.payload.teamId,
            },
            create: {
              id: event.payload.dutyId,
              date: dutyDate,
              teamId: event.payload.teamId,
              status: "UNAPPROVED",
            },
          });
        } catch (error) {
          if (this.isDateTeamConflict(error)) {
            // date+team の既存行と id を整合させ、同一勤務イベントを再適用可能にする
            await this.prisma.duty.update({
              where: {
                date_teamId: {
                  date: dutyDate,
                  teamId: event.payload.teamId,
                },
              },
              data: {
                id: event.payload.dutyId,
                date: dutyDate,
                teamId: event.payload.teamId,
              },
            });
            break;
          }

          throw error;
        }
        break;

      }

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
          case "WorkGroupAssignmentChanged": {
            const { dutyId, staffId } = event.payload;
            
            // ✅ 実行時バリデーションの強化
            if (!dutyId) {
              throw new Error(`[DutyProjector] Missing dutyId for event: ${event.eventType}`);
            }
    
            const workGroupId =
              event.eventType === "WorkGroupAssignmentChanged"
                ? event.payload.newWorkGroupId
                : event.payload.workGroupId;
     
            await this.prisma.workGroupAssignment.upsert({
              where: {
                dutyId_staffId: {
                  dutyId: dutyId,
                  staffId: staffId,
                },
              },
              update: { workGroupId },
              create: {
                dutyId: dutyId,
                staffId: staffId,
                workGroupId,
              },
            });
            break;
          }

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

  private isDateTeamConflict(error: unknown): boolean {
    return (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002" &&
      Array.isArray(error.meta?.target) &&
      error.meta?.target.includes("date") &&
      error.meta?.target.includes("teamId")
    );
  }
}