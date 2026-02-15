// domain/attendance/__test__/attendanceCommandHandler.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest";
import { AttendanceCommandHandler } from "@/domain/attendance/attendanceCommandHandlers";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { AttendanceEvent } from "@/domain/attendance/attendance-events";

describe("AttendanceCommandHandler", () => {
  let mockEventStore: EventStoreRepository<AttendanceEvent>;
  let handler: AttendanceCommandHandler;

  beforeEach(() => {
    mockEventStore = {
      append: vi.fn().mockResolvedValue(undefined),
      load: vi.fn(),
    } as unknown as EventStoreRepository<AttendanceEvent>;

    handler = new AttendanceCommandHandler(mockEventStore);
  });

  it("StartWork: should create aggregate and append events", async () => {
    const command = {
      type: "StartWork",
      dutyId: "d1",
      staffId: 1,
      at: "2024-01-01T09:00:00Z",
    } as const;

    await handler.handle(command);

    expect(mockEventStore.append).toHaveBeenCalledTimes(1);

    const [streamId] = (mockEventStore.append as any).mock.calls[0];
    expect(streamId).toBe("attendance-d1-1");
  });

  it("StartBreak: should load working state and append events", async () => {
    // working状態を再現するためのイベント
    const events: AttendanceEvent[] = [
      { eventType: "WorkStarted",payload:{ dutyId: "d1", staffId: 1,at:"2024-01-01T08:30:00Z" }},
    ];

    (mockEventStore.load as any).mockResolvedValue(events);

    const command = {
      type: "StartBreak",
      dutyId: "d1",
      staffId: 1,
      at: "2024-01-01T12:00:00Z",
    } as const;

    await handler.handle(command);

    expect(mockEventStore.load).toHaveBeenCalledWith(
      "attendance-d1-1"
    );

    expect(mockEventStore.append).toHaveBeenCalledTimes(1);
  });

  it("EndWork: should load working state and append events", async () => {
    const events: AttendanceEvent[] = [
      { eventType: "WorkStarted",payload:{ dutyId: "d1", staffId: 1,at:"2024-01-01T08:30:00Z" }},
    ];

    (mockEventStore.load as any).mockResolvedValue(events);

    const command = {
      type: "EndWork",
      dutyId: "d1",
      staffId: 1,
      at: "2024-01-01T18:00:00Z",
    } as const;

    await handler.handle(command);

    expect(mockEventStore.append).toHaveBeenCalledTimes(1);
  });
});
