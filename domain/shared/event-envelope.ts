export interface EventEnvelope<E extends { type: string }> {
    eventId: string
  
    aggregateId: string          // scheduleDayId (例: '2026-02-01')
  
    aggregateType: 'ScheduleDay' // 将来拡張用（強く推奨）
  
    eventType: E['type']         // payload.type のコピー（index 用）
  
    payload: E                   // ドメインイベント（唯一の真実）
  
    occurredAt: string
  
    causedBy: string             // commandId
  
    aggregateVersion: number     // 楽観ロック・競合検知用
  
    schemaVersion: number        // Event schema migration 用
  }
  