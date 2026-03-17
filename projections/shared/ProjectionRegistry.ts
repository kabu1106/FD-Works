import { IProjector } from "./IProjector";
import { DomainEvent } from "@/domain/shared/domainEventrt";

export class ProjectionRegistry {

  private readonly projectors: IProjector<DomainEvent>[] = [];

  register(projector: IProjector<DomainEvent>) {
    this.projectors.push(projector);
  }

  getAll(): IProjector<DomainEvent>[] {
    return this.projectors;
  }

}