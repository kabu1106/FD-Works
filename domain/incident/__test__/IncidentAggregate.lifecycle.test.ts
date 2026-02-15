import { describe, it, expect } from "vitest";
import { IncidentAggregate } from "@/domain/incident/IncidentAggregate";

describe("IncidentAggregate lifecycle", () => {
  const incidentId = "incident-1";
  const dutyId = "duty-1";
  const locationId = 10;
  const occurredAt = "2025-10-01T10:00:00Z";

  it("dispatch → board → return full lifecycle", () => {
    const agg = IncidentAggregate.report(
      incidentId,
      dutyId,
      locationId,
      occurredAt
    );

    // dispatch
    expect(() =>
      agg.dispatchVehicle(1, "2025-10-01T10:05:00Z")
    ).not.toThrow();

    // board
    expect(() =>
      agg.boardStaff(1, 100, )
    ).not.toThrow();

    // return
    expect(() =>
      agg.returnVehicle(1, "2025-10-01T11:00:00Z")
    ).not.toThrow();
  });

  it("cannot dispatch same vehicle again after return (current domain behavior)", () => {
    const agg = IncidentAggregate.report(
      incidentId,
      dutyId,
      locationId,
      occurredAt
    );

    agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
    agg.returnVehicle(1, "2025-10-01T11:00:00Z");

    expect(() =>
      agg.dispatchVehicle(1, "2025-10-01T12:00:00Z")
    ).toThrow("Vehicle already dispatched");
  });

  it("full lifecycle then close prevents further operations", () => {
    const agg = IncidentAggregate.report(
      incidentId,
      dutyId,
      locationId,
      occurredAt
    );

    agg.dispatchVehicle(1, "2025-10-01T10:05:00Z");
    agg.boardStaff(1, 100, );
    agg.returnVehicle(1, "2025-10-01T11:00:00Z");
    agg.close("2025-10-01T12:00:00Z");

    expect(() =>
      agg.dispatchVehicle(2, "2025-10-01T12:10:00Z")
    ).toThrow("Incident closed");

    expect(() =>
      agg.boardStaff(1, 101, )
    ).toThrow("Incident closed");

    expect(() =>
      agg.returnVehicle(1, "2025-10-01T12:10:00Z")
    ).toThrow("Incident closed");
  });
});
