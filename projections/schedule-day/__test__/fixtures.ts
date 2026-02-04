// __tests__/fixtures.ts
import { ScheduleDayProjection } from '../schedule-day.projection'

export const baseProjection: ScheduleDayProjection = {
  date: '2026-02-01',
  teams: [
    {
      teamId: 1,
      workGroups: [
        { workGroupId: 101, staffIds: [] },
        { workGroupId: 102, staffIds: [] },
      ],
    },
  ],
}
