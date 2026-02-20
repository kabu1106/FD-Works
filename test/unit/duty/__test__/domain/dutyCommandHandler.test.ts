import { describe, it, expect, vi, beforeEach } from "vitest";
import { DutyCommandHandler } from "@/domain/duty/dutyCommandHandlers";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { DutyEvent } from "@/domain/duty/duty-events";
import { DutyCommand } from "@/domain/duty/dutyCommands";
import { DutyProjector } from "@/projections/duty/DutyProjector";

describe("DutyCommandHandler", () => {
  let appendMock: ReturnType<typeof vi.fn>;
  let loadMock: ReturnType<typeof vi.fn>;
  let projectSingleMock: ReturnType<typeof vi.fn>; // 追加
  let handler: DutyCommandHandler;

  beforeEach(() => {
    appendMock = vi.fn().mockResolvedValue(undefined);
    loadMock = vi.fn();
    projectSingleMock = vi.fn().mockResolvedValue(undefined); // 追加

    const mockEventStore = {
      append: appendMock,
      load: loadMock,
    } as unknown as EventStoreRepository<DutyEvent>;

    // Projectorのモックを作成
    const mockProjector = {
      projectSingle: projectSingleMock,
    } as unknown as DutyProjector;

    // 2つの引数を渡してインスタンス化
    handler = new DutyCommandHandler(mockEventStore, mockProjector);
  });

  describe("CreateDuty", () => {
    it("should append events with version 0", async () => {
      const command: DutyCommand = {
        type: "CreateDuty",
        dutyId: "d1",
        teamId: 1,
        date: "2024-01-01",
      } as any;

      await handler.handle(command);

      expect(loadMock).not.toHaveBeenCalled();
      expect(appendMock).toHaveBeenCalledTimes(1);

      const [, , , version] = appendMock.mock.calls[0];
      expect(version).toBe(0);
    });
  });

  describe("ApproveDuty", () => {
    it("should append approval event", async () => {
      loadMock.mockResolvedValue([
        {
          eventType: "DutyCreated",
          payload: { dutyId: "d1", teamId: 1, date: "2024-01-01" },
        },
        {
          eventType: "StaffAssignedToDuty",
          payload: { dutyId: "d1", staffId: 10 },
        },
      ]);

      const command: DutyCommand = {
        type: "ApproveDuty",
        dutyId: "d1",
        approvedBy: "admin",
      } as any;

      await handler.handle(command);

      expect(appendMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("LockDuty", () => {
    it("should append lock event", async () => {
      loadMock.mockResolvedValue([
        {
          eventType: "DutyCreated",
          payload: { dutyId: "d1", teamId: 1, date: "2024-01-01" },
        },
        {
          eventType: "StaffAssignedToDuty",
          payload: { dutyId: "d1", staffId: 10 },
        },
        {
          eventType: "DutyApproved",
          payload: { dutyId: "d1", approvedBy: "admin" },
        },
      ]);

      const command: DutyCommand = {
        type: "LockDuty",
        dutyId: "d1",
      } as any;

      await handler.handle(command);

      expect(appendMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("MarkDutyForRecalculation", () => {
    it("should append recalculation event", async () => {
      loadMock.mockResolvedValue([
        {
          eventType: "DutyCreated",
          payload: { dutyId: "d1", teamId: 1, date: "2024-01-01" },
        },
        {
          eventType: "StaffAssignedToDuty",
          payload: { dutyId: "d1", staffId: 10 },
        },
        {
          eventType: "DutyApproved",
          payload: { dutyId: "d1", approvedBy: "admin" },
        },
        {
          eventType: "DutyLocked",
          payload: { dutyId: "d1" },
        },
      ]);

      const command: DutyCommand = {
        type: "MarkDutyForRecalculation",
        dutyId: "d1",
        reason: "fix",
      } as any;

      await handler.handle(command);

      expect(appendMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("DutyCommandHandler - error cases (table driven)", () => {
    const baseCreated = [
      {
        eventType: "DutyCreated",
        payload: { dutyId: "d1", teamId: 1, date: "2024-01-01" },
      },
    ];
  
    const withStaff = [
      ...baseCreated,
      {
        eventType: "StaffAssignedToDuty",
        payload: { dutyId: "d1", staffId: 10 },
      },
    ];
  
    const approved = [
      ...withStaff,
      {
        eventType: "DutyApproved",
        payload: { dutyId: "d1", approvedBy: "admin" },
      },
    ];
  
    const locked = [
      ...approved,
      {
        eventType: "DutyLocked",
        payload: { dutyId: "d1" },
      },
    ];
  
    const cases = [
      {
        name: "approve without staff",
        history: baseCreated,
        command: {
          type: "ApproveDuty",
          dutyId: "d1",
          approvedBy: "admin",
        },
        error: "Cannot approve duty without staff",
      },
      {
        name: "approve already approved",
        history: approved,
        command: {
          type: "ApproveDuty",
          dutyId: "d1",
          approvedBy: "admin",
        },
        error: "Already approved",
      },
      {
        name: "lock without approval",
        history: withStaff,
        command: {
          type: "LockDuty",
          dutyId: "d1",
        },
        error: "Cannot lock unapproved duty",
      },
      {
        name: "recalculate without lock",
        history: approved,
        command: {
          type: "MarkDutyForRecalculation",
          dutyId: "d1",
          reason: "fix",
        },
        error: "Only locked duty can be recalculated",
      },
      {
        name: "assign staff after approval (immutable)",
        history: approved,
        command: {
          type: "AssignStaffToDuty",
          dutyId: "d1",
          staffId: 99,
        },
        error: "Duty is immutable",
      },
    ];
  
    describe.each(cases)("$name", ({ history, command, error }) => {
      it(`should throw "${error}"`, async () => {
        loadMock.mockResolvedValue(history);
  
        await expect(handler.handle(command as any))
          .rejects
          .toThrow(error);
  
        expect(appendMock).not.toHaveBeenCalled();
      });
    });
  });

  describe("DutyCommandHandler - success cases (strict event verification)", () => {
    const baseCreated = [
      {
        eventType: "DutyCreated",
        payload: { dutyId: "d1", teamId: 1, date: "2024-01-01" },
      },
    ];
  
    const withStaff = [
      ...baseCreated,
      {
        eventType: "StaffAssignedToDuty",
        payload: { dutyId: "d1", staffId: 10 },
      },
    ];
  
    const approved = [
      ...withStaff,
      {
        eventType: "DutyApproved",
        payload: { dutyId: "d1", approvedBy: "admin" },
      },
    ];
  
    const locked = [
      ...approved,
      {
        eventType: "DutyLocked",
        payload: { dutyId: "d1" },
      },
    ];
  
    const cases = [
      {
        name: "AssignStaffToDuty",
        history: baseCreated,
        command: {
          type: "AssignStaffToDuty",
          dutyId: "d1",
          staffId: 20,
        },
        expectedEvent: {
          eventType: "StaffAssignedToDuty",
          payload: { dutyId: "d1", staffId: 20 },
        },
      },
      {
        name: "ApproveDuty",
        history: withStaff,
        command: {
          type: "ApproveDuty",
          dutyId: "d1",
          approvedBy: "admin",
        },
        expectedEvent: {
          eventType: "DutyApproved",
          payload: { dutyId: "d1", approvedBy: "admin" },
        },
      },
      {
        name: "LockDuty",
        history: approved,
        command: {
          type: "LockDuty",
          dutyId: "d1",
        },
        expectedEvent: {
          eventType: "DutyLocked",
          payload: { dutyId: "d1" },
        },
      },
      {
        name: "MarkDutyForRecalculation",
        history: locked,
        command: {
          type: "MarkDutyForRecalculation",
          dutyId: "d1",
          reason: "fix",
        },
        expectedEvent: {
          eventType: "DutyMarkedForRecalculation",
          payload: { dutyId: "d1", reason: "fix" },
        },
      },
    ];
  
    describe.each(cases)(
      "$name should append correct event",
      ({ history, command, expectedEvent }) => {
        it("should append correct event with correct payload and version", async () => {
          loadMock.mockResolvedValue(history);
  
          await handler.handle(command as any);
  
          expect(appendMock).toHaveBeenCalledTimes(1);
  
          const [streamId, aggregateType, events, version] =
            appendMock.mock.calls[0];
  
          expect(streamId).toBe("duty-d1");
          expect(aggregateType).toBe("Duty");
  
          expect(events).toHaveLength(1);
          expect(events[0]).toStrictEqual(expectedEvent);
  
          expect(version).toBe(history.length);
        });
      }
    );
  });  
  
});
