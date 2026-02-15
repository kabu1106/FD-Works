import { AttendanceAggregate } from "./attendanceAggregate";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { AttendanceCommand } from "./attendanceCommands";
import { AttendanceEvent } from "./attendance-events";

export class AttendanceCommandHandler {
  constructor(
    private readonly eventStore: EventStoreRepository<AttendanceEvent>
  ) {}

  async handle(command: AttendanceCommand): Promise<void> {
    const streamId = `attendance-${command.dutyId}-${command.staffId}`;

    if (command.type === "StartWork") {
      const aggregate = AttendanceAggregate.start(
        command.dutyId,
        command.staffId,
        command.at
      );

      await this.eventStore.append(
        streamId,
        aggregate.getAggregateType(),
        aggregate.uncommittedEvents,
        0 // 新規は version 0
      );

      aggregate.clearEvents();
      return;
    }

    const history = await this.eventStore.load(streamId);

    const aggregate = new AttendanceAggregate();
    aggregate.loadFromHistory(history);

    const expectedVersion = aggregate.getVersion();

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

    await this.eventStore.append(
      streamId,
      aggregate.getAggregateType(),
      aggregate.uncommittedEvents,
      expectedVersion
    );

    aggregate.clearEvents();
  }
}
