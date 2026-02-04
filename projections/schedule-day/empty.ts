import { ScheduleDayProjection } from "./schedule-day.projection"

export function emptyScheduleDay(
    date: string,
    teams: {
      teamId: number
      workGroupIds: number[]
    }[]
  ): ScheduleDayProjection {
    return {
      date,
      teams: teams.map(team => ({
        teamId: team.teamId,
        workGroups: team.workGroupIds.map(id => ({
          workGroupId: id,
          staffIds: [],
        })),
      })),
    }
  }
  