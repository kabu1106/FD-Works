import { describe, it, expect, beforeEach } from "vitest";
import { IncidentAggregate } from "@/domain/incident/IncidentAggregate";

describe("IncidentAggregate", () => {
  const incidentId = "incident-1";
  const dutyId = "duty-1";
  const locationId = 10;
  const occurredAt = "2025-10-01T10:00:00Z";

  let agg: IncidentAggregate;

  beforeEach(() => {
    agg = IncidentAggregate.report(
      incidentId,
      dutyId,
      locationId,
      occurredAt
    );
  });

  describe("report", () => {
    it("should create incident successfully", () => {
      expect(agg).toBeInstanceOf(IncidentAggregate);
    });
  });

  describe("dispatchVehicle", () => {
    it("dispatch vehicle successfully", () => {
      expect(() =>
        agg.dispatchVehicle(1, "2025-10-01T10:05:00Z")
      ).not.toThrow();
    });

    it("cannot dispatch same vehicle twice", () => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      expect(() =>
        agg.dispatchVehicle(1, "2025-10-01T10:06:00Z")
      ).toThrow("Vehicle already dispatched");
    });
  });

  describe("boardStaff", () => {
    it("board staff successfully", () => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      expect(() =>
        agg.boardStaff(1, 100,)
      ).not.toThrow();
    });

    it("can board without dispatch (domain currently allows it)", () => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      expect(() =>
        agg.boardStaff(1, 100,)
      ).not.toThrow();
    });
  });

  describe("returnVehicle", () => {
    it("return vehicle successfully", () => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      expect(() =>
        agg.returnVehicle(1, "2025-10-01T11:00:00Z")
      ).not.toThrow();
    });
  });

  describe("close", () => {
    it("close incident successfully", () => {
      expect(() =>
        agg.close("2025-10-01T12:00:00Z")
      ).not.toThrow();
    });

    it("cannot close twice", () => {
      agg.close("2025-10-01T12:00:00Z");
      expect(() =>
        agg.close("2025-10-01T13:00:00Z")
      ).toThrow("Already closed");
    });
  });

  describe("immutable after close", () => {
    beforeEach(() => {
      agg.close("2025-10-01T12:00:00Z");
    });

    it("cannot dispatch vehicle", () => {
      expect(() =>
        agg.dispatchVehicle(2, "2025-10-01T12:10:00Z")
      ).toThrow("Incident closed");
    });

    it("cannot board staff", () => {
      expect(() =>
        agg.boardStaff(1, 100, )
      ).toThrow("Incident closed");
    });

    it("cannot return vehicle", () => {
      expect(() =>
        agg.returnVehicle(1, "2025-10-01T12:10:00Z")
      ).toThrow("Incident closed");
    });
  });

  describe("boardStaff constraint", () => {
    it("cannot board staff if vehicle not dispatched", () => {
      expect(() =>
        agg.boardStaff(1, 100, )
      ).toThrow("Vehicle not dispatched");
    });

    it("can board staff after vehicle dispatched", () => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      expect(() =>
        agg.boardStaff(1, 100,)
      ).not.toThrow();
    });
  });

  describe("immutable after close", () => {
    beforeEach(() => {
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
      agg.close("2025-10-01T12:00:00Z");
    });

    it("cannot board staff", () => {
      expect(() =>
        agg.boardStaff(1, 100, )
      ).toThrow("Incident closed");
    });
  });
});
