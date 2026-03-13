// src/infra/projection/attendance/attendanceProjector.ts
import { EventStore, PrismaClient } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";
import { AttendanceEventDTO } from "@/domain/attendance/attendanceEventSchema";

export class AttendanceProjector
  implements IProjector<AttendanceEventDTO>{
  readonly name = "AttendanceTimeline";
  private projection = new AttendanceTimelineProjection();

  constructor(private readonly prisma: PrismaClient) {}

  async project(events: AttendanceEventDTO[]): Promise<void> {
    const groupedEvents = this.groupEventsByKey(events);
  
    for (const [key, stream] of Object.entries(groupedEvents)) {
      const [staffIdStr, dutyId] = key.split(":");
      const staffId = parseInt(staffIdStr, 10);
  
      await this.prisma.$transaction(async (tx) => {
        let state: TimelineState = createInitialTimelineState();
  
        for (const event of stream) {
          state = this.projection.project(state, event);
        }
  
        await tx.attendance.deleteMany({
          where: { staffId, dutyId },
        });
  
        for (const slot of state.slots) {
          await tx.attendance.create({
            data: {
              staffId: slot.staffId,
              dutyId: slot.dutyId,
              type: this.mapSlotTypeToAttendanceType(slot.type),
              startTime: new Date(slot.startAt),
              endTime: slot.endAt ? new Date(slot.endAt) : new Date(),
              departmentId: 1,
            },
          });
        }
      });
    }
  }

  private groupEventsByKey(events: EventStore[]) {
    return events.reduce((acc, event) => {
      const payload = event.payload as any;
      const key = `${payload.staffId}:${payload.dutyId}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(event);
      return acc;
    }, {} as Record<string, EventStore[]>);
  }

  private mapSlotTypeToAttendanceType(type: "work" | "break") {
    // スキーマの AttendanceEventType (WORK_STARTED等) や 
    // モデル構造に合わせて変換
    return type === "work" ? "WORK_STARTED" : "BREAK_STARTED";
  }
}