import { ScheduleCommand } from "../commands/schedule-commands"
import { EventEnvelope } from "../events/event-envelope"
import { ScheduleEvent } from "../events/schedule-events"

export function handleScheduleCommand(
  cmd: ScheduleCommand
): EventEnvelope<ScheduleEvent>[] {
  const occurredAt = new Date().toISOString()

  switch (cmd.type) {

    case 'ASSIGN_STAFF_TO_WORK_GROUP': {
      const event: ScheduleEvent = {
        type: 'STAFF_ASSIGNED',
        date: cmd.date,
        staffId: cmd.staffId,
        to: cmd.to,
      }

      return [{
        eventId: crypto.randomUUID(),
        aggregateId: cmd.date,
        type: event.type,
        payload: event,
        occurredAt,
        causedBy: cmd.commandId,
        version: 1,
      }]
    }

    case 'MOVE_STAFF_BETWEEN_WORK_GROUPS': {
      const event: ScheduleEvent = {
        type: 'STAFF_MOVED',
        date: cmd.date,
        staffId: cmd.staffId,
        from: cmd.from,
        to: cmd.to,
      }

      return [{
        eventId: crypto.randomUUID(),
        aggregateId: cmd.date,
        type: event.type,
        payload: event,
        occurredAt,
        causedBy: cmd.commandId,
        version: 1,
      }]
    }

    case 'REMOVE_STAFF_FROM_WORK_GROUP': {
      const event: ScheduleEvent = {
        type: 'STAFF_REMOVED',
        date: cmd.date,
        staffId: cmd.staffId,
        from: cmd.from,
      }

      return [{
        eventId: crypto.randomUUID(),
        aggregateId: cmd.date,
        type: event.type,
        payload: event,
        occurredAt,
        causedBy: cmd.commandId,
        version: 1,
      }]
    }

    case 'SWAP_STAFF': {
      const event: ScheduleEvent = {
        type: 'STAFF_SWAPPED',
        date: cmd.date,
        staffA: cmd.staffA,
        staffB: cmd.staffB,
      }

      return [{
        eventId: crypto.randomUUID(),
        aggregateId: cmd.date,
        type: event.type,
        payload: event,
        occurredAt,
        causedBy: cmd.commandId,
        version: 1,
      }]
    }
  }
}
