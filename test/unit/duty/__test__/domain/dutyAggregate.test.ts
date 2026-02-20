import { describe, it, expect, beforeEach } from "vitest";
import { DutyAggregate } from "@/domain/duty/dutyAggregate";

describe("DutyAggregate", () => {
  const dutyId = "duty-1";
  const teamId = 1;
  const date = "2025-10-01";

  let agg: DutyAggregate;

  beforeEach(() => {
    agg = DutyAggregate.create(dutyId, teamId, date);
  });

  describe("create", () => {
    it("should create duty successfully", () => {
      expect(agg).toBeInstanceOf(DutyAggregate);
    });
  });

  describe("staff assignment", () => {
    it("assign staff", () => {
      expect(() => agg.assignStaff(1)).not.toThrow();
    });

    it("cannot assign same staff twice", () => {
      agg.assignStaff(1);
      expect(() => agg.assignStaff(1)).toThrow("Staff already assigned");
    });

    it("unassign staff", () => {
      agg.assignStaff(1);
      expect(() => agg.unassignStaff(1)).not.toThrow();
    });

    it("cannot unassign non-assigned staff", () => {
      expect(() => agg.unassignStaff(1)).toThrow("Staff not assigned");
    });
  });

  describe("work group", () => {
    it("assign workgroup", () => {
      agg.assignStaff(1);
      expect(() => agg.assignWorkGroup(1, 100)).not.toThrow();
    });

    it("cannot assign workgroup to unassigned staff", () => {
      expect(() => agg.assignWorkGroup(1, 100)).toThrow(
        "Staff not assigned to duty"
      );
    });

    it("cannot assign workgroup twice", () => {
      agg.assignStaff(1);
      agg.assignWorkGroup(1, 100);
      expect(() => agg.assignWorkGroup(1, 200)).toThrow(
        "WorkGroup already assigned"
      );
    });

    it("change workgroup", () => {
      agg.assignStaff(1);
      agg.assignWorkGroup(1, 100);
      expect(() =>
        agg.changeWorkGroup(1, 200, "rotation")
      ).not.toThrow();
    });

    it("cannot change workgroup if not assigned", () => {
      agg.assignStaff(1);
      expect(() =>
        agg.changeWorkGroup(1, 200, "rotation")
      ).toThrow("WorkGroup not assigned yet");
    });
  });

  describe("approval flow", () => {
    it("cannot approve without staff", () => {
      expect(() => agg.approve("admin")).toThrow(
        "Cannot approve duty without staff"
      );
    });

    it("approve successfully", () => {
      agg.assignStaff(1);
      expect(() => agg.approve("admin")).not.toThrow();
    });

    it("cannot approve twice", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      expect(() => agg.approve("admin")).toThrow("Already approved");
    });

    it("revoke approval", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      expect(() => agg.revokeApproval("mistake")).not.toThrow();
    });

    it("cannot revoke if not approved", () => {
      expect(() => agg.revokeApproval("mistake")).toThrow("Not approved");
    });
  });

  describe("locking", () => {
    it("cannot lock before approval", () => {
      expect(() => agg.lock()).toThrow(
        "Cannot lock unapproved duty"
      );
    });

    it("lock after approval", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      expect(() => agg.lock()).not.toThrow();
    });

    it("cannot mutate after approval", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      expect(() => agg.assignStaff(2)).toThrow("Duty is immutable");
    });

    it("cannot mutate after lock", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      agg.lock();
      expect(() => agg.assignStaff(2)).toThrow("Duty is immutable");
    });
  });

  describe("recalculation", () => {
    it("cannot mark recalculation if not locked", () => {
      expect(() =>
        agg.markForRecalculation("bug")
      ).toThrow("Only locked duty can be recalculated");
    });

    it("mark recalculation after lock", () => {
      agg.assignStaff(1);
      agg.approve("admin");
      agg.lock();
      expect(() =>
        agg.markForRecalculation("bug")
      ).not.toThrow();
    });
  });
});
