// src/infra/projection/shared/IProjector.ts
import { EventStore } from "@prisma/client";

export interface IProjector {
  name: string; // チェックポイント識別用
  project(events: EventStore[]): Promise<void>;
}