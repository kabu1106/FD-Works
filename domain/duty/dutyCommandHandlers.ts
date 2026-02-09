// src/application/commandHandlers/duty/DutyCommandHandler.ts

import { DutyAggregate } from "@/domain/duty/DutyAggregate";
import { DutyCommand } from "@/domain/duty/dutyCommands";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { DutyEvent } from "./duty-events";

export class DutyCommandHandler {
  constructor(private readonly eventStore: EventStoreRepository) {}

  async handle(command: DutyCommand) {
    const aggregate =
      command.type === "CreateDuty"
        ? DutyAggregate.create(command.dutyId, command.teamId, command.date)
        : await this.load(command.dutyId);

    switch (command.type) {
      case "AssignStaffToDuty":
        aggregate.assignStaff(command.staffId);
        break;

      case "UnassignStaffFromDuty":
        aggregate.unassignStaff(command.staffId);
        break;

      case "ApproveDuty":
        aggregate.approve(command.approvedby);
        break;

      case "RevokeDutyApproval":
        aggregate.revokeApproval();
        break;

      case "LockDuty":
        aggregate.lock();
        break;

      case "MarkDutyForRecalculation":
        aggregate.markForRecalculation(command.reason);
        break;
    }

    await this.eventStore.append(
      command.dutyId,
      "DutyAggregate",
      aggregate.uncommittedEvents
    );

    aggregate.clearEvents();
  }

  private async load(dutyId: string): Promise<DutyAggregate> {
    const events = await this.eventStore.load<DutyEvent>(dutyId);
    const agg = new DutyAggregate();
  
    events.forEach((event: DutyEvent) => {
      (agg as any).apply(event, true);
    });
  
    return agg;
  }
  
}
