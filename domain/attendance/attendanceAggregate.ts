import { AggregateRoot } from "../shared/AggregateRoot";
import { AttendanceEvent } from "./attendance-events";

type AttendanceState = "notStarted" | "working" | "onBreak" | "ended";

export class AttendanceAggregate extends AggregateRoot<AttendanceEvent> {
  private dutyId!: string;
  private staffId!: number;
  private state: AttendanceState = "notStarted";

  // =====================
  // Factory
  // =====================
  static start(dutyId: string, staffId: number, at: string) {
    const agg = new AttendanceAggregate();
    agg.apply({
      eventType: "WorkStarted",
      payload: { dutyId, staffId, at },
    });
    return agg;
  }

  // =====================
  // Commands
  // =====================
  startBreak(at: string) {
    if (this.state !== "working") {
      throw new Error("Cannot start break unless working");
    }

    this.apply({
      eventType: "BreakStarted",
      payload: {
        dutyId: this.dutyId,
        staffId: this.staffId,
        at,
      },
    });
  }

  endBreak(at: string) {
    if (this.state !== "onBreak") {
      throw new Error("Not on break");
    }

    this.apply({
      eventType: "BreakEnded",
      payload: {
        dutyId: this.dutyId,
        staffId: this.staffId,
        at,
      },
    });
  }

  endWork(at: string) {
    if (this.state === "ended") {
      throw new Error("Work already ended");
    }
    if (this.state === "notStarted") {
      throw new Error("Work not started");
    }

    this.apply({
      eventType: "WorkEnded",
      payload: {
        dutyId: this.dutyId,
        staffId: this.staffId,
        at,
      },
    });
  }

  // =====================
  // Event Applier
  // =====================
  protected when(event: AttendanceEvent) {
    switch (event.eventType) {
      case "WorkStarted":
        this.dutyId = event.payload.dutyId;
        this.staffId = event.payload.staffId;
        this.state = "working";
        break;

      case "BreakStarted":
        this.state = "onBreak";
        break;

      case "BreakEnded":
        this.state = "working";
        break;

      case "WorkEnded":
        this.state = "ended";
        break;
    }
  }
}
