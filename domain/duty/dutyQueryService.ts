// src/application/queries/duty/DutyQueryService.ts
import { PrismaClient } from "@prisma/client";
import { DutyDetailDTO } from "./dutyDTO";

export class DutyQueryService {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 指定したチームと日付の勤務詳細を取得する
   */
  async getDutyDetail(teamId: number, date: string): Promise<DutyDetailDTO | null> {
    const record = await this.prisma.duty.findUnique({
      where: {
        date_teamId: {
          date: new Date(date),
          teamId: teamId,
        },
      },
      include: {
        team: true,
        workGroupAssignments: {
          include: {
            staff: true,
            workGroup: true,
          },
        },
      },
    });

    if (!record) return null;

    return {
      id: record.id,
      date: record.date.toISOString().split("T")[0],
      teamId: record.teamId,
      teamName: record.team.name,
      status: record.status,
      isLocked: record.isLocked,
      assignedStaffs: record.workGroupAssignments.map((wa) => ({
        staffId: wa.staffId,
        staffName: wa.staff.name,
        workGroupId: wa.workGroupId,
        workGroupName: wa.workGroup.name,
      })),
    };
  }

  /**
   * 特定の期間の勤務一覧を取得する（カレンダー表示用など）
   */
  async getDutiesByPeriod(teamId: number, start: string, end: string) {
    return this.prisma.duty.findMany({
      where: {
        teamId,
        date: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      orderBy: { date: "asc" },
    });
  }
}