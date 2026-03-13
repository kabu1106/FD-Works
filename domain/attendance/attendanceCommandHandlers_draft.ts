import { AttendanceAggregate } from "./attendanceAggregate";
import { AttendanceCommand } from "@/domain/attendance/attendanceCommands";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { AttendanceEventDTO } from "@/domain/attendance/attendanceEventSchema";
import { AttendanceProjector } from "@/projections/attendance/attendanceProjector";

export class AttendanceCommandHandler {
  constructor(
    private readonly eventStore: EventStoreRepository<AttendanceEventDTO>,
    private readonly projector: AttendanceProjector
  ) {}

  async handle(command: AttendanceCommand): Promise<void> {
    const streamId = `attendance-${command.dutyId}`;
    let eventsToProject: AttendanceEventDTO[] = [];
    let expectedVersion = 0;
    let aggregate: AttendanceAggregate;

    if (command.type === "StartWork") {
      aggregate = AttendanceAggregate.start(command.dutyId, command.staffId, command.at);
      eventsToProject = [...aggregate.uncommittedEvents];
      expectedVersion = 0;
    } else {
      const history = await this.eventStore.load(streamId);
      aggregate = new AttendanceAggregate();
      aggregate.loadFromHistory(history);
      expectedVersion = aggregate.getVersion();

      this.applyCommand(aggregate, command);
      eventsToProject = [...aggregate.uncommittedEvents];
    }

    // 2. Event Store への保存
    await this.eventStore.append(
      streamId,
      "Attendance",
      eventsToProject,
      expectedVersion
    );

    // 保存が終わったら集約内のイベントをクリアする
    aggregate.clearEvents();

    // 3. プロジェクションの実行（リトライ付き）
    for (const event of eventsToProject) {
      await this.projectWithRetry(event);
    }
  }

  private async projectWithRetry(event: AttendanceEventDTO): Promise<void> {
    const maxProjectionRetries = 3;

    for (let attempt = 1; attempt <= maxProjectionRetries; attempt++) {
      try {
        await this.projector.project(event);
        return; // 成功したら抜ける
      } catch (error) {
        if (attempt === maxProjectionRetries) {
          // リトライ上限に達した場合
          console.error(`[AttendanceProjectionError] exhausted retries for ${event.eventType}:`, error);
          throw error;
        }
        // 指数バックオフ的な待機
        await new Promise((resolve) => setTimeout(resolve, 20 * attempt));
      }
    }
  }

  private applyCommand(aggregate: AttendanceAggregate, command: AttendanceCommand) {
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
  }
}