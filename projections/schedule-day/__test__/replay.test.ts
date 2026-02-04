// projections/schedule-day/__test__/replay.test.ts
import { replayScheduleDay } from '../replay'
import { emptyScheduleDay } from '../empty'
import { ScheduleEvent } from '@/domain/events/schedule-events'

describe('ScheduleDay Replay', () => {
  it('イベントを順番に再生して正しい状態になる', () => {
    const events: ScheduleEvent[] = [
      {
        type: 'STAFF_ASSIGNED',
        date: '2026-02-01',
        staffId: 10,
        to: { teamId: 1, workGroupId: 101 },
      },
      {
        type: 'STAFF_ASSIGNED',
        date: '2026-02-01',
        staffId: 20,
        to: { teamId: 1, workGroupId: 102 },
      },
      {
        type: 'STAFF_SWAPPED',
        date: '2026-02-01',
        staffA: {
          staffId: 10,
          from: { teamId: 1, workGroupId: 101 },
          to:   { teamId: 1, workGroupId: 102 },
        },
        staffB: {
          staffId: 20,
          from: { teamId: 1, workGroupId: 102 },
          to:   { teamId: 1, workGroupId: 101 },
        },
      },
    ]

    const result = replayScheduleDay(
      emptyScheduleDay('2026-02-01',[{ teamId: 1, workGroupIds: [101, 102]}]),
      events
    )

    expect(result.teams[0].workGroups[0].staffIds).toEqual([20])
    expect(result.teams[0].workGroups[1].staffIds).toEqual([10])
  })
})
