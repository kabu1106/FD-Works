// src/test/factories/eventStore.factory.ts
import { Factory } from "fishery";
import { EventStore } from "@prisma/client";
import { incidentEventFactory } from "./incidentEvent.factory";

export const eventStoreFactory = Factory.define<EventStore>(({ sequence }) => {
  const defaultEvent = incidentEventFactory.build();
  
  return {
    id: `evt_${sequence}`,
    aggregateId: defaultEvent.payload.incidentId,
    aggregateType: "Incident",
    aggregateVersion: sequence,
    eventType: defaultEvent.eventType,
    payload: defaultEvent as any,
    occurredAt: new Date(),
    causedBy: `cmd_${sequence}`,
    schemaVersion: 1,
    createdAt: new Date(),
  };
});