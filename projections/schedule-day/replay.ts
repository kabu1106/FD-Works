// projections/schedule-day/replay.ts
import { ScheduleEvent } from '@/domain/events/schedule-events'
import { ScheduleDayProjection } from './schedule-day.projection'
import { applyScheduleEvent } from './apply-events'

export function replayScheduleDay(
  base: ScheduleDayProjection,
  events: ScheduleEvent[]
): ScheduleDayProjection {
  return events.reduce(
    (projection, event) =>
      applyScheduleEvent(projection, event),
    base
  )
}
