import { describe, it, expect } from "vitest";
import { AttendanceAggregate } from "@/domain/attendance/attendanceAggregate";

describe("AttendanceAggregate", () => {
  const dutyId = "duty-1";
  const staffId = 100;
  const now = "2024-01-01T09:00:00Z";

  describe("start", () => {
    it("should create WorkStarted event", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);

      const events = agg.uncommittedEvents;

      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        eventType: "WorkStarted",
        payload: { dutyId, staffId, at: now },
      });
    });
  });

  describe("startBreak", () => {
    it("should create BreakStarted event when working", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);

      agg.startBreak("2024-01-01T12:00:00Z");

      const events = agg.uncommittedEvents;

      expect(events).toHaveLength(2);
      expect(events[1].eventType).toBe("BreakStarted");
    });

    it("should throw if not working", () => {
      const agg = new AttendanceAggregate();

      expect(() =>
        agg.startBreak("2024-01-01T12:00:00Z")
      ).toThrow("Cannot start break unless working");
    });
  });

  describe("endBreak", () => {
    it("should create BreakEnded event when onBreak", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);
      agg.startBreak("2024-01-01T12:00:00Z");

      agg.endBreak("2024-01-01T13:00:00Z");

      const events = agg.uncommittedEvents;

      expect(events).toHaveLength(3);
      expect(events[2].eventType).toBe("BreakEnded");
    });

    it("should throw if not onBreak", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);

      expect(() =>
        agg.endBreak("2024-01-01T13:00:00Z")
      ).toThrow("Not on break");
    });
  });

  describe("endWork", () => {
    it("should create WorkEnded event", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);

      agg.endWork("2024-01-01T18:00:00Z");

      const events = agg.uncommittedEvents;

      expect(events).toHaveLength(2);
      expect(events[1].eventType).toBe("WorkEnded");
    });

    it("should throw if not started", () => {
      const agg = new AttendanceAggregate();

      expect(() =>
        agg.endWork("2024-01-01T18:00:00Z")
      ).toThrow("Work not started");
    });

    it("should throw if already ended", () => {
      const agg = AttendanceAggregate.start(dutyId, staffId, now);
      agg.endWork("2024-01-01T18:00:00Z");

      expect(() =>
        agg.endWork("2024-01-01T19:00:00Z")
      ).toThrow("Work already ended");
    });
  });
});
