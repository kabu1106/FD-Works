// src/application/commandHandlers/duty/DutyCommandHandler.ts
import { DutyAggregate } from "./dutyAggregate";
import { DutyCommand } from "@/domain/duty/dutyCommands";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";
import { DutyProjector } from "@/projections/duty/DutyProjector"; // 追加

export class DutyCommandHandler {
  constructor(
    private readonly eventStore: EventStoreRepository<DutyEventDTO>,
    private readonly projector: DutyProjector // 追加
  ) {}
  
// src/application/commandHandlers/duty/DutyCommandHandler.ts

async handle(command: DutyCommand): Promise<void> {
  const streamId = `attendance-${command.dutyId}`;
  let eventsToProject: DutyEventDTO[] = [];
  let expectedVersion = 0;
  let aggregate: DutyAggregate; // スコープを広げる

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

  // ★重要: 保存が終わったら集約内のイベントをクリアする
  aggregate.clearEvents(); 

  // 3. プロジェクションの実行
  for (const event of eventsToProject) {
      try {
        await this.projector.projectSingle(event);
      } catch (error) {
        // ログ出力。プロジェクションの失敗でコマンド全体をロールバックさせない判断
        console.error(`[DutyProjectionError] ${event.eventType}:`, error);
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