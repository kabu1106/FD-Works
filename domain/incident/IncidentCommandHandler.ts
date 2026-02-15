 // src/domain/incident/IncidentCommandHandler.ts
import { IncidentAggregate } from "@/domain/incident/IncidentAggregate";
import { IncidentCommand } from "@/domain/incident/incidentCommands";
import { IncidentEvent } from "@/domain/incident/incident-events";
import { EventStoreRepository } from "@/infra/event-store/EventStoreRepository";
import { OptimisticLockError } from "@/domain/errors/OptimisticLockError";
import { IncidentProjector } from "@/projections/incident/incidentProjector";

export class IncidentCommandHandler {
  constructor(
    private readonly eventStore: EventStoreRepository<IncidentEvent>,
    private readonly projection: IncidentProjector, // 追加
    private readonly maxRetries: number = 3
  ) {}

  async handle(command: IncidentCommand): Promise<void> {
    const streamId = `incident-${command.incidentId}`;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        let eventsToProject: IncidentEvent[] = [];

        if (command.type === "ReportIncident") {
          const aggregate = IncidentAggregate.report(
            command.incidentId,
            command.dutyId,
            command.locationId,
            command.occurredAt
          );
          eventsToProject = [...aggregate.uncommittedEvents];
          await this.eventStore.append(streamId, aggregate.getAggregateType(), eventsToProject, 0);
        } else {
          const history = await this.eventStore.load(streamId);
          const aggregate = new IncidentAggregate();
          aggregate.loadFromHistory(history);
          const expectedVersion = aggregate.getVersion();

          this.applyCommandToAggregate(aggregate, command); // ロジックを分離

          eventsToProject = [...aggregate.uncommittedEvents];
          await this.eventStore.append(streamId, aggregate.getAggregateType(), eventsToProject, expectedVersion);
        }

        // --- Projectionの実行（リトライ付き） ---
        for (const event of eventsToProject) {
          await this.projectWithRetry(event);
        }

        return;
      } catch (error) {
        if (error instanceof OptimisticLockError && attempt < this.maxRetries) continue;
        throw error;
      }
    }
  }

  private async projectWithRetry(event: IncidentEvent): Promise<void> {
    const maxProjectionRetries = 3;

    for (let attempt = 1; attempt <= maxProjectionRetries; attempt++) {
      try {
        await this.projection.projectSingle(event);
        return;
      } catch (projError) {
        if (attempt === maxProjectionRetries) {
          console.error(
            `Projection failed after retries for event: ${event.eventType}`,
            projError
          );
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, 20 * attempt));
      }
    }
  }

  private applyCommandToAggregate(aggregate: IncidentAggregate, command: IncidentCommand) {
    switch (command.type) {
      case "DispatchVehicle":
        aggregate.dispatchVehicle(command.vehicleId, command.dispatchedAt);
        break;
      case "BoardStaff":
        aggregate.boardStaff(command.vehicleId, command.staffId);
        break;
      case "ReturnVehicle":
        aggregate.returnVehicle(command.vehicleId, command.returnedAt);
        break;
      case "CloseIncident":
        aggregate.close(command.closedAt);
        break;
    }
  }
}