import { DutyAggregate } from "./dutyAggregate";
import { DutyCommand } from "@/domain/duty/dutyCommands";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";
import { DutyProjector } from "@/projections/duty/DutyProjector";

export class DutyCommandHandler {
  constructor(
    private readonly eventStore: EventStoreRepository<DutyEventDTO>,
    private readonly projector: DutyProjector
  ) {}

  async handle(command: DutyCommand): Promise<void> {
    const streamId = `duty-${command.dutyId}`;
    let eventsToProject: DutyEventDTO[] = [];
    let expectedVersion = 0;
    let aggregate: DutyAggregate;

    if (command.type === "CreateDuty") {
      aggregate = DutyAggregate.create(command.dutyId, command.teamId, command.date);
      eventsToProject = [...aggregate.uncommittedEvents];
      expectedVersion = 0;
    } else {
      const history = await this.eventStore.load(streamId);
      aggregate = new DutyAggregate();
      aggregate.loadFromHistory(history);
      expectedVersion = aggregate.getVersion();

      this.applyCommand(aggregate, command);
      eventsToProject = [...aggregate.uncommittedEvents];
    }

    // 2. Event Store への保存
    await this.eventStore.append(
      streamId,
      "Duty",
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

  private async projectWithRetry(event: DutyEventDTO): Promise<void> {
    const maxProjectionRetries = 3;

    for (let attempt = 1; attempt <= maxProjectionRetries; attempt++) {
      try {
        await this.projector.projectSingle(event);
        return; // 成功したら抜ける
      } catch (error) {
        if (attempt === maxProjectionRetries) {
          // リトライ上限に達した場合
          console.error(`[DutyProjectionError] exhausted retries for ${event.eventType}:`, error);
          throw error;
        }
        // 指数バックオフ的な待機
        await new Promise((resolve) => setTimeout(resolve, 20 * attempt));
      }
    }
  }

  private applyCommand(aggregate: DutyAggregate, command: DutyCommand) {
    switch (command.type) {
      case "AssignStaffToDuty":
        aggregate.assignStaff(command.staffId);
        break;
      case "UnassignStaffFromDuty":
        aggregate.unassignStaff(command.staffId);
        break;
      case "AssignWorkGroupToStaff":
        aggregate.assignWorkGroup(command.staffId, command.workGroupId);
        break;
      case "ChangeWorkGroupAssignment":
        aggregate.changeWorkGroup(command.staffId, command.workGroupId, "Manual Change");
        break;
      case "ApproveDuty":
        aggregate.approve(command.approvedBy);
        break;
      case "RevokeDutyApproval":
        aggregate.revokeApproval(command.reason);
        break;
      case "LockDuty":
        aggregate.lock();
        break;
      case "MarkDutyForRecalculation":
        aggregate.markForRecalculation(command.reason);
        break;
    }
  }
}