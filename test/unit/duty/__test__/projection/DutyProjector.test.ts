import { describe, it, expect, vi, beforeEach } from "vitest";
import { DutyProjector } from "@/projections/duty/DutyProjector";
import { PrismaClient } from "@prisma/client";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

describe("DutyProjector", () => {
  let prisma: any;
  let projector: DutyProjector;

  beforeEach(() => {
    prisma = {
      $transaction: vi.fn(async (fn) => fn(prisma)),

      duty: {
        deleteMany: vi.fn(),
        create: vi.fn(),
      },

      workGroupAssignment: {
        deleteMany: vi.fn(),
        create: vi.fn(),
      },
    };

    projector = new DutyProjector(prisma as unknown as PrismaClient);
  });

  function envelope(event: DutyEventDTO): EventEnvelope<DutyEventDTO> {
    return {
      eventId:"evt-1",
      aggregateId: "evt-1",
      aggregateType: "Duty",
      aggregateVersion: 1,
      schemaVersion: 1,
      causedBy: "Duty",
      occurredAt: new Date().toISOString(),
      event,
    };
  }

  it("creates duty when DutyCreated event is projected", async () => {
    const dutyId = crypto.randomUUID();

    const events = [
      envelope({
        eventType: "DutyCreated",
        payload: {
          dutyId,
          teamId: 1,
          date: "2025-01-01",
        },
      }),
    ];

    await projector.project(events);

    expect(prisma.$transaction).toHaveBeenCalled();

    expect(prisma.duty.deleteMany).toHaveBeenCalledWith({
      where: { id: dutyId },
    });

    expect(prisma.duty.create).toHaveBeenCalled();
  });

  it("writes workGroup assignments", async () => {
    const dutyId = crypto.randomUUID();

    const events = [
      envelope({
        eventType: "DutyCreated",
        payload: {
          dutyId,
          teamId: 1,
          date: "2025-01-01",
        },
      }),
      envelope({
        eventType: "WorkGroupAssignedToStaff",
        payload: {
          dutyId,
          staffId: 10,
          workGroupId: 3,
        },
      }),
    ];

    await projector.project(events);

    expect(prisma.workGroupAssignment.create).toHaveBeenCalledWith({
      data: {
        dutyId,
        staffId: 10,
        workGroupId: 3,
      },
    });
  });

  it("groups events by dutyId", async () => {
    const dutyA = crypto.randomUUID();
    const dutyB = crypto.randomUUID();

    const events = [
      envelope({
        eventType: "DutyCreated",
        payload: { dutyId: dutyA, teamId: 1, date: "2025-01-01" },
      }),
      envelope({
        eventType: "DutyCreated",
        payload: { dutyId: dutyB, teamId: 1, date: "2025-01-02" },
      }),
    ];

    await projector.project(events);

    expect(prisma.$transaction).toHaveBeenCalledTimes(2);
  });

  it("removes assignment when StaffUnassignedFromDuty", async () => {
    const dutyId = crypto.randomUUID();

    const events = [
      envelope({
        eventType: "DutyCreated",
        payload: { dutyId, teamId: 1, date: "2025-01-01" },
      }),
      envelope({
        eventType: "WorkGroupAssignedToStaff",
        payload: { dutyId, staffId: 10, workGroupId: 3 },
      }),
      envelope({
        eventType: "StaffUnassignedFromDuty",
        payload: { dutyId, staffId: 10 },
      }),
    ];

    await projector.project(events);

    expect(prisma.workGroupAssignment.create).not.toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          staffId: 10,
        }),
      })
    );
  });
});