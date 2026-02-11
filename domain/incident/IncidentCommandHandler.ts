// src/application/commandHandlers/incident/IncidentCommandHandler.ts

import { IncidentAggregate } from "@/domain/incident/IncidentAggregate";
import { IncidentCommand } from "@/domain/incident/incidentCommands";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";

export class IncidentCommandHandler {
  constructor(private readonly eventStore: EventStoreRepository) {}

  async handle(command: IncidentCommand): Promise<void> {
    const aggregate =
      command.type === "ReportIncident"
        ? IncidentAggregate.report(
            command.incidentId,
            command.dutyId,
            command.locationId,
            command.occurredAt
          )
        : await this.load(command.incidentId);

    switch (command.type) {
      case "DispatchVehicle":
        aggregate.dispatchVehicle(
          command.vehicleId,
          command.dispatchedAt
        );
        break;

      case "BoardStaff":
        aggregate.boardStaff(
          command.vehicleId,
          command.staffId,
          command.boardedAt
        );
        break;

      case "ReturnVehicle":
        aggregate.returnVehicle(
          command.vehicleId,
          command.returnedAt
        );
        break;

      case "CloseIncident":
        aggregate.close(command.closedAt);
        break;
    }

    await this.eventStore.append(
      command.incidentId,
      "IncidentAggregate",
      aggregate.uncommittedEvents
    );

    aggregate.clearEvents();
  }

  private async load(incidentId: string): Promise<IncidentAggregate> {
    const events = await this.eventStore.load<IncidentEvent>(incidentId);
    const agg = new IncidentAggregate();

    events.forEach((event: IncidentEvent) => {
      (agg as any).apply(event, true);
    });

    return agg;
  }
}
