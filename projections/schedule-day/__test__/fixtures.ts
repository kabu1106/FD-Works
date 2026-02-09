// __tests__/fixtures.ts
import { ScheduleDayProjection } from '../schedule-day.projection'

export const baseProjection: ScheduleDayProjection = {
  date: '2026-02-01',
  unassignedStaffs: [],
  teams: [
    {
      teamId: 1,
      name: '1担当',
      workGroups: [
        { workGroupId: 101, staffIds: [], name: '1番起' },
        { workGroupId: 102, staffIds: [], name: '1番起' },
      ],
    },
  ],
}
