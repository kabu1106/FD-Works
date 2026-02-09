import { ScheduleDayProjection } from "./schedule-day.projection"

export function emptyScheduleDay(
    date: string,
    teams: {
      teamId: number
      name: string
      workGroupIds: number[]
    }[]
  ): ScheduleDayProjection {
    return {
      date,
      unassignedStaffs: [], // これも忘れずに追加
      teams: teams.map(team => ({
        teamId: team.teamId,
        name: team.name,
        workGroups: team.workGroupIds.map(id => ({
          workGroupId: id,
          name: `グループ ${id}`, // デフォルトの名前を設定
          staffIds: [],
        })),
      })),
    }
  }