// src/test/integration/DutyIntegration.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db/prisma"; // ← Prisma一元化前提
import { DutyCommandHandler } from "@/domain/duty/dutyCommandHandlers";
import { DutyProjector } from "@/projections/duty/DutyProjector";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { PrismaEventStoreRepository } from "@/infra/event-store/PrismaEventStoreRepository";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

describe("Duty Domain Integration Test", () => {
  let handler: DutyCommandHandler;
  let eventStore: EventStoreRepository<DutyEventDTO>;
  let projector: DutyProjector;

  // テストごとに完全分離されたID群
  let teamId: number;
  let staffId1: number;
  let staffId2: number;
  let workGroupId1: number;
  let workGroupId2: number;

  beforeEach(async () => {
    // 一意ID生成（数値カラム対応）
    teamId = Math.floor(Math.random() * 1000000);
    staffId1 = Math.floor(Math.random() * 1000000);
    staffId2 = Math.floor(Math.random() * 1000000);
    workGroupId1 = Math.floor(Math.random() * 1000000);
    workGroupId2 = Math.floor(Math.random() * 1000000);

    const departmentId = teamId + 1;
    const workShiftId = teamId + 2;

    // マスタデータ投入（すべてユニーク）
    await prisma.workShift.create({
      data: { id: workShiftId, code: `S-${workShiftId}`, name: "24h" }
    });

    await prisma.department.create({
      data: { id: departmentId, code: `D-${departmentId}`, name: "Hq" }
    });

    await prisma.team.create({
      data: {
        id: teamId,
        departmentId,
        workShiftId,
        code: `T-${teamId}`,
        name: "Team A"
      }
    });

    await prisma.staff.create({
      data: {
        id: staffId1,
        staffNo: `S-${staffId1}`,
        name: "Test Staff 1",
        teamId
      }
    });

    await prisma.staff.create({
      data: {
        id: staffId2,
        staffNo: `S-${staffId2}`,
        name: "Test Staff 2",
        teamId
      }
    });

    await prisma.workGroup.create({
      data: { id: workGroupId1, code: `G-${workGroupId1}`, name: "WG1" }
    });

    await prisma.workGroup.create({
      data: { id: workGroupId2, code: `G-${workGroupId2}`, name: "WG2" }
    });

    eventStore = new PrismaEventStoreRepository<DutyEventDTO>(prisma);
    projector = new DutyProjector(prisma);
    handler = new DutyCommandHandler(eventStore, projector);
  });

  it("勤務の作成からスタッフの割り当て、承認までの一連のフローがDBに反映されること", async () => {
    const dutyId = randomUUID();
    const aggregateId = `duty-${dutyId}`;

    await handler.handle({
      type: "CreateDuty",
      dutyId,
      teamId,
      date: "2024-06-01",
    });

    const dutyRecord = await prisma.duty.findUnique({
      where: { id: dutyId }
    });

    expect(dutyRecord).not.toBeNull();
    expect(dutyRecord?.status).toBe("UNAPPROVED");

    await handler.handle({
      type: "AssignStaffToDuty",
      dutyId,
      staffId: staffId1
    });

    await handler.handle({
      type: "AssignWorkGroupToStaff",
      dutyId,
      staffId: staffId1,
      workGroupId: workGroupId2
    });

    const assignment = await prisma.workGroupAssignment.findUnique({
      where: {
        dutyId_staffId: { dutyId, staffId: staffId1 }
      }
    });

    expect(assignment?.workGroupId).toBe(workGroupId2);

    await handler.handle({
      type: "ApproveDuty",
      dutyId,
      approvedBy: "Test admin"
    });

    const approvedDuty = await prisma.duty.findUnique({
      where: { id: dutyId }
    });

    expect(approvedDuty?.status).toBe("APPROVED");

    const history = await eventStore.load(aggregateId);

    expect(history.length).toBe(4);
    expect(history[0].eventType).toBe("DutyCreated");
  });

  it("スタッフの割り当て解除時に、読み取りモデルからも削除されること", async () => {
    const dutyId = randomUUID();

    await handler.handle({
      type: "CreateDuty",
      dutyId,
      teamId,
      date: "2024-06-01"
    });

    await handler.handle({
      type: "AssignStaffToDuty",
      dutyId,
      staffId: staffId2
    });

    await handler.handle({
      type: "AssignWorkGroupToStaff",
      dutyId,
      staffId: staffId2,
      workGroupId: workGroupId1
    });

    await handler.handle({
      type: "UnassignStaffFromDuty",
      dutyId,
      staffId: staffId2
    });

    const assignment = await prisma.workGroupAssignment.findUnique({
      where: {
        dutyId_staffId: { dutyId, staffId: staffId2 }
      }
    });

    expect(assignment).toBeNull();
  });
});
