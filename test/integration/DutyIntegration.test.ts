// src/test/integration/duty/DutyIntegration.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { DutyCommandHandler } from "@/domain/duty/dutyCommandHandlers";
import { DutyProjector } from "@/projections/duty/DutyProjector";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { prisma, clearDatabase } from "./setup";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

describe("Duty Domain Integration Test", () => {
  let handler: DutyCommandHandler;
  let eventStore: EventStoreRepository<DutyEventDTO>;
  let projector: DutyProjector;

  beforeEach(async () => {
    await clearDatabase();
    
    // マスタデータの投入 (teamId: 1 が必要)
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

    // ... その後の初期化
    eventStore = new PrismaEventStoreRepository<DutyEventDTO>(prisma);
    projector = new DutyProjector(prisma);
    handler = new DutyCommandHandler(eventStore, projector);
  });

  it("勤務の作成からスタッフの割り当て、承認までの一連のフローがDBに反映されること", async () => {
    const dutyId = "test-duty-uuid-001";
    const staffId = 101;
    const workGroupId = 5;

    // 1. 勤務作成コマンドの実行
    await handler.handle({
      type: "CreateDuty",
      dutyId,
      teamId: 1,
      date: "2024-06-01",
    });

    // DBの確認: dutiesテーブルにレコードがあるか
    const dutyRecord = await prisma.duty.findUnique({ where: { id: dutyId } });
    expect(dutyRecord).not.toBeNull();
    expect(dutyRecord?.status).toBe("UNAPPROVED");

    // 2. スタッフ割り当てとワークグループ設定
    // ※ Aggregateの制約上、先に割り当てが必要
    await handler.handle({ type: "AssignStaffToDuty", dutyId, staffId });
    await handler.handle({ type: "AssignWorkGroupToStaff", dutyId, staffId, workGroupId });

    // DBの確認: work_group_assignmentsテーブル
    const assignment = await prisma.workGroupAssignment.findUnique({
      where: { dutyId_staffId: { dutyId, staffId } }
    });
    expect(assignment?.workGroupId).toBe(workGroupId);

    // 3. 承認コマンド
    await handler.handle({
      type: "ApproveDuty",
      dutyId,
      approvedBy: "test-admin"
    });

    // DBの確認: ステータスが変更されているか
    const approvedDuty = await prisma.duty.findUnique({ where: { id: dutyId } });
    expect(approvedDuty?.status).toBe("APPROVED");

    // 4. イベントストアの確認 (副作用が正しく永続化されているか)
    const history = await eventStore.load(`attendance-${dutyId}`);
    expect(history.length).toBe(4); // Created, Assigned, WGAssigned, Approved
    expect(history[0].eventType).toBe("DutyCreated");
  });

  it("スタッフの割り当て解除時に、読み取りモデルからも削除されること", async () => {
    const dutyId = "test-duty-uuid-002";
    const staffId = 202;

    // 前提条件: 作成と割り当て
    await handler.handle({ type: "CreateDuty", dutyId, teamId: 1, date: "2024-06-01" });
    await handler.handle({ type: "AssignStaffToDuty", dutyId, staffId });
    await handler.handle({ type: "AssignWorkGroupToStaff", dutyId, staffId, workGroupId: 1 });

    // 実行: 割り当て解除
    await handler.handle({ type: "UnassignStaffFromDuty", dutyId, staffId });

    // 検証: プロジェクションによって中間テーブルから消えているか
    const assignment = await prisma.workGroupAssignment.findUnique({
      where: { dutyId_staffId: { dutyId, staffId } }
    });
    expect(assignment).toBeNull();
  });
});