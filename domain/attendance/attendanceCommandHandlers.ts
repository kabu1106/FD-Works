// src/application/commandHandlers/attendance/AttendanceCommandHandler.ts

import { AttendanceAggregate } from "@/domain/attendance/AttendanceAggregate";
import { AttendanceCommand } from "@/domain/attendance/attendanceCommands";
import { AttendanceEvent } from "@/domain/attendance/attendance-events";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";

export class AttendanceCommandHandler {
  constructor(private readonly eventStore: EventStoreRepository) {}

  async handle(command: AttendanceCommand): Promise<void> {
    const aggregate =
      command.type === "StartWork"
        ? AttendanceAggregate.start(
            command.dutyId,
            command.staffId,
            command.at
          )
        : await this.load(command.dutyId, command.staffId);

    switch (command.type) {
      case "StartBreak":
        aggregate.startBreak(command.at);
        break;

      case "EndBreak":
        aggregate.endBreak(command.at);
        break;

      case "EndWork":
        aggregate.endWork(command.at);
        break;
    }

    const streamId = this.streamId(command.dutyId, command.staffId);

    await this.eventStore.append(
      streamId,
      "AttendanceAggregate",
      aggregate.uncommittedEvents
    );

    aggregate.clearEvents();
  }

  private async load(
    dutyId: string,
    staffId: number
  ): Promise<AttendanceAggregate> {
    const streamId = this.streamId(dutyId, staffId);
    const events = await this.eventStore.load<AttendanceEvent>(streamId);

    const agg = new AttendanceAggregate();
    events.forEach((event: AttendanceEvent) => {
      (agg as any).apply(event, true);
    });

    return agg;
  }

  private streamId(dutyId: string, staffId: number): string {
    return `attendance-${dutyId}-${staffId}`;
  }
}
