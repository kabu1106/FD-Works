// src/test/factories/dutyEvent.factory.ts
import { Factory } from "fishery";
import { DutyEventDTO } from "@/domain/duty/dutyEventSchema";

export const dutyEventFactory = Factory.define<DutyEventDTO>(() => ({
  eventType: "DutyCreated",
  payload: {
    dutyId: "duty-123",
    teamId: 1,
    date: "2024-05-20",
  },
}));