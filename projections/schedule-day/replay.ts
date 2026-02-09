// projections/schedule-day/replay.ts
import { ScheduleEvent } from '@/domain/shared/schedule-events'
import { ScheduleDayProjection } from './schedule-day.projection'
import { applyScheduleEvent } from './apply-events'

/**
 * イベント群を順次適用し、最新の状態を復元（Replay）する
 */
export function replayScheduleDay(
  base: ScheduleDayProjection,
  events: ScheduleEvent[]
): ScheduleDayProjection {
  
  // 安全装置: base 内に必要な配列が存在しない場合に備える
  const normalizedBase: ScheduleDayProjection = {
    ...base,
    unassignedStaffs: base.unassignedStaffs ?? [],
    teams: base.teams ?? [],
  };

  return events.reduce(
    (projection, event) => applyScheduleEvent(projection, event),
    normalizedBase
  );
}