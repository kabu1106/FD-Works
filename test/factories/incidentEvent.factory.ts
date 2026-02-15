// src/test/factories/incidentEvent.factory.ts
import { Factory } from "fishery";
import { IncidentEvent } from "@/domain/incident/incident-events";

// ドメインイベント（ペイロード部分）のファクトリ
export const incidentEventFactory = Factory.define<IncidentEvent>(() => ({
  eventType: "IncidentOccurred",
  payload: {
    incidentId: "550e8400-e29b-41d4-a716-446655440000",
    dutyId: "770e8400-e29b-41d4-a716-446655440111",
    locationId: 1,
    occurredAt: new Date().toISOString(),
  },
}));

// 特定のイベント型を生成するヘルパー（transientなパラメータとして扱うことも可能）
export const vehicleDispatchedFactory = incidentEventFactory.params({
  eventType: "VehicleDispatched",
  payload: {
    incidentId: "550e8400-e29b-41d4-a716-446655440000",
    vehicleId: 101,
    dispatchedAt: new Date().toISOString(),
  } as any, // 簡易化のためキャスト
});