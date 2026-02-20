// src/application/queries/duty/DutyQueryService.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { DutyQueryService } from "@/domain/duty/dutyQueryService";
import { prisma } from "@/lib/db/prisma";

describe("DutyQueryService", () => {
  let queryService: DutyQueryService;
    // テストごとに完全分離されたID群
    let teamId: number;
    let staffId1: number;
    let workGroupId: number;

  beforeEach(async () => {
    queryService = new DutyQueryService(prisma);

    teamId = Math.floor(Math.random() * 1000000);
    staffId1 = Math.floor(Math.random() * 1000000);
    workGroupId = Math.floor(Math.random() * 1000000);

    const departmentId = teamId + 1;
    const workShiftId = teamId + 2;

    // create ではなく upsert を使う
    await prisma.workShift.upsert({
      where: { id: workShiftId },
      update: {},
      create: { id: workShiftId, code: "S1", name: "24h" }
    });

    await prisma.department.upsert({
      where: { id: departmentId },
      update: {},
      create: { id: departmentId, code: "D1", name: "Hq" }
    });

    await prisma.team.upsert({
      where: { id: teamId },
      update: {},
      create: { id: teamId, departmentId: departmentId, workShiftId: workShiftId, code: "T1", name: "Team A" }
    });

    await prisma.staff.upsert({
      where: { id: staffId1 },
      update: {},
      create: { id: staffId1, staffNo: "S101", name: "田中太郎", teamId: teamId }
    });

    await prisma.workGroup.upsert({
      where: { id: workGroupId },
      update: {},
      create: { id: workGroupId, code: "G5", name: "救急隊" }
    });
  });

  it("保存された勤務データが適切なDTO形式で取得できること", async () => {
    const dutyId = "duty-query-test";
    const date = "2024-06-01";

    // 1. テストデータの直接投入（またはProjector経由）
    await prisma.duty.create({
      data: {
        id: dutyId,
        date: new Date(date),
        teamId: teamId,
        status: "UNAPPROVED",
        workGroupAssignments: {
          create: {
            staffId: staffId1,
            workGroupId: workGroupId,
          },
        },
      },
    });

    // 2. Query実行
    const result = await queryService.getDutyDetail(teamId, date);

    // 3. 検証
    expect(result).not.toBeNull();
    expect(result?.teamName).toBe("Team A");
    expect(result?.assignedStaffs[0].staffName).toBe("田中太郎");
    expect(result?.assignedStaffs[0].workGroupName).toBe("救急隊");
    expect(result?.status).toBe("UNAPPROVED");
  });
});