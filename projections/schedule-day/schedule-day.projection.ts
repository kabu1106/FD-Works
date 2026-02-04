export interface ScheduleDayProjection {
    date: string
    teams: {
      teamId: number
      workGroups: {
        workGroupId: number
        staffIds: number[]
      }[]
    }[]
  }
  