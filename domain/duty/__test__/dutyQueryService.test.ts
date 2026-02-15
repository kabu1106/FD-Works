// src/application/queries/duty/DutyQueryService.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { prisma, clearDatabase } from "@/test/integration/setup";
import { DutyQueryService } from "../dutyQueryService";

describe("DutyQueryService", () => {
  let queryService: DutyQueryService;

  // domain/duty/__test__/dutyQueryService.test.ts の beforeEach 内

  beforeEach(async () => {
    await clearDatabase();
    queryService = new DutyQueryService(prisma);

    // create ではなく upsert を使う
    await prisma.workShift.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, code: "S1", name: "24h" }
    });

    await prisma.department.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, code: "D1", name: "Hq" }
    });

    await prisma.team.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, departmentId: 1, workShiftId: 1, code: "T1", name: "Team A" }
    });

    await prisma.staff.upsert({
      where: { id: 101 },
      update: {},
      create: { id: 101, staffNo: "S101", name: "田中太郎", teamId: 1 }
    });

    await prisma.workGroup.upsert({
      where: { id: 5 },
      update: {},
      create: { id: 5, code: "G5", name: "救急隊" }
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
        teamId: 1,
        status: "APPROVED",
        workGroupAssignments: {
          create: {
            staffId: 101,
            workGroupId: 5,
          },
        },
      },
    });

    // 2. Query実行
    const result = await queryService.getDutyDetail(1, date);

    // 3. 検証
    expect(result).not.toBeNull();
    expect(result?.teamName).toBe("Team A");
    expect(result?.assignedStaffs[0].staffName).toBe("田中太郎");
    expect(result?.assignedStaffs[0].workGroupName).toBe("救急隊");
    expect(result?.status).toBe("APPROVED");
  });
});