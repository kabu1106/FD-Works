// src/projections/duty/DutyProjector.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { PrismaClient } from "@prisma/client";
import { DutyProjector } from "@/projections/duty/DutyProjector";
import { dutyEventFactory } from "@/test/factories/dutyEvent.factory";

describe("DutyProjector", () => {
  let prisma: PrismaClient;
  let projector: DutyProjector;

  beforeEach(() => {
    // Prismaの各モデルに対するモック関数を用意
    prisma = {
      duty: {
        upsert: vi.fn(),
        update: vi.fn(),
      },
      workGroupAssignment: {
        upsert: vi.fn(),
        deleteMany: vi.fn(),
      },
    } as unknown as PrismaClient;

    projector = new DutyProjector(prisma);
  });

  it("DutyCreatedイベントでdutyをupsertする", async () => {
    const event = dutyEventFactory.build({
      eventType: "DutyCreated",
      payload: { dutyId: "d1", teamId: 10, date: "2024-05-20" },
    });

    await projector.projectSingle(event);

    expect(prisma.duty.upsert).toHaveBeenCalledWith({
      where: { id: "d1" },
      update: expect.objectContaining({ teamId: 10 }),
      create: expect.objectContaining({ id: "d1", teamId: 10 }),
    });
  });

  it("WorkGroupAssignedToStaffイベントで割り当てをupsertする", async () => {
    const event = dutyEventFactory.build({
      eventType: "WorkGroupAssignedToStaff",
      payload: { dutyId: "d1", staffId: 99, workGroupId: 5 } as any,
    });

    await projector.projectSingle(event);

    expect(prisma.workGroupAssignment.upsert).toHaveBeenCalledWith({
      where: {
        dutyId_staffId: { dutyId: "d1", staffId: 99 },
      },
      update: { workGroupId: 5 },
      create: { dutyId: "d1", staffId: 99, workGroupId: 5 },
    });
  });

  it("DutyApprovedイベントでステータスをAPPROVEDに更新する", async () => {
    const event = dutyEventFactory.build({
      eventType: "DutyApproved",
      payload: { dutyId: "d1", approvedBy: "admin" },
    });

    await projector.projectSingle(event);

    expect(prisma.duty.update).toHaveBeenCalledWith({
      where: { id: "d1" },
      data: { status: "APPROVED" },
    });
  });

  it("StaffUnassignedFromDutyイベントで割り当てを削除する", async () => {
    const event = dutyEventFactory.build({
      eventType: "StaffUnassignedFromDuty",
      payload: { dutyId: "d1", staffId: 99 },
    });

    await projector.projectSingle(event);

    expect(prisma.workGroupAssignment.deleteMany).toHaveBeenCalledWith({
      where: { dutyId: "d1", staffId: 99 },
    });
  });

  it("DutyLockedイベントでisLockedフラグを立てる", async () => {
    const event = dutyEventFactory.build({
      eventType: "DutyLocked",
      payload: { dutyId: "d1" },
    });

    await projector.projectSingle(event);

    expect(prisma.duty.update).toHaveBeenCalledWith({
      where: { id: "d1" },
      data: expect.objectContaining({ isLocked: true }),
    });
  });
});