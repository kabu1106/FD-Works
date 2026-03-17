// src/infra/projection/attendance/attendanceProjector.ts

import { PrismaClient } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { EventEnvelope } from "@/domain/shared/event-envelope";
import { AttendanceEventDTO } from "@/domain/attendance/attendanceEventSchema";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import {
  createInitialTimelineState,
  TimelineState
} from "@/domain/attendance/attendanceTimelineTypes";

export class AttendanceProjector
  implements IProjector<AttendanceEventDTO>
{
  readonly name = "AttendanceTimeline";

  private projection = new AttendanceTimelineProjection();

  constructor(private readonly prisma: PrismaClient) {}

  async project(events: EventEnvelope<AttendanceEventDTO>[]): Promise<void> {

    const grouped = this.groupEventsByKey(events);

    for (const [key, stream] of Object.entries(grouped)) {
      const [staffIdStr, dutyId] = key.split(":");
      const staffId = parseInt(staffIdStr, 10);

      await this.prisma.$transaction(async (tx) => {

        let state: TimelineState = createInitialTimelineState();

        for (const envelope of stream) {
          state = this.projection.project(state, envelope.event);
        }

        await tx.attendance.deleteMany({
          where: { staffId, dutyId }
        });

        for (const slot of state.slots) {
          await tx.attendance.create({
            data: {
              staffId: slot.staffId,
              dutyId: slot.dutyId,
              type: slot.type === "work" ? "WORK_STARTED" : "BREAK_STARTED",
              startTime: new Date(slot.startAt),
              endTime: slot.endAt ? new Date(slot.endAt) : new Date(),
              departmentId: 1
            }
          });
        }
      });
    }
  }

  private groupEventsByKey(events: EventEnvelope<AttendanceEventDTO>[]) {

    return events.reduce((acc, envelope) => {

      const payload = envelope.event.payload;

      const key = `${payload.staffId}:${payload.dutyId}`;

      if (!acc[key]) acc[key] = [];

      acc[key].push(envelope);

      return acc;

    }, {} as Record<string, EventEnvelope<AttendanceEventDTO>[]>);
  }
}