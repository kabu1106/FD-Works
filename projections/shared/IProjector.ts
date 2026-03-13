// src/infra/projection/shared/IProjector.ts
import { EventStore } from "@prisma/client";

export interface IProjector<TEvent> {
  name: string;
  project(events: TEvent[]): Promise<void>;
}