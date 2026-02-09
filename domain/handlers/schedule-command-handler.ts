import { ScheduleDayProjection } from "@/projections/schedule-day/schedule-day.projection";
import { checkInvariants } from "@/projections/schedule-day/schedule-validator";
import { ScheduleCommand } from "../commands/schedule-commands"
import { EventEnvelope } from "../shared/event-envelope"
import { ScheduleEvent } from "../shared/schedule-events"
import { convertToEvent } from "./handlers-helper"

export function handleScheduleCommand(
  cmd: ScheduleCommand,
  currentProjection: ScheduleDayProjection
): EventEnvelope<ScheduleEvent>[] {
  // 1. まずイベント（仮）を作る
  const event = convertToEvent(cmd); 

  // 2. 不変条件チェック（Phase 1 のロジックを再利用！）
  // ここで違反があれば Error がスローされ、関数の実行が止まります
  checkInvariants(currentProjection, event);

  // 3. OKなら封筒（Envelope）に入れて返す
  const occurredAt = new Date().toISOString();
  const aggregateType = 'ScheduleDay';
  const schemaVersion = 1;
  const aggregateVersion = 1; // 将来的には currentProjection.version + 1 等に

  const envelope: EventEnvelope<ScheduleEvent> = {
    eventId: crypto.randomUUID(),
    aggregateId: cmd.date,
    aggregateType,
    eventType: event.type,
    payload: event,
    occurredAt,
    causedBy: cmd.commandId,
    aggregateVersion,
    schemaVersion,
  };

  return [envelope];
}