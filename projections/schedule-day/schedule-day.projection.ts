export interface ScheduleViewModel extends ScheduleDayProjection {
  // 逆引き用： staffId -> { teamId, workGroupId }
  assignments: Record<number, { teamId: number; workGroupId: number }>;
}

export function toViewModel(projection: ScheduleDayProjection): ScheduleViewModel {
  const assignments: Record<number, { teamId: number; workGroupId: number }> = {};

  projection.teams.forEach(team => {
    team.workGroups.forEach(group => {
      group.staffIds.forEach(staffId => {
        assignments[staffId] = {
          teamId: team.teamId,
          workGroupId: group.workGroupId
        };
      });
    });
  });

  return {
    ...projection,
    assignments
  };
}

// domain/projections/schedule-day.projection.ts

// ① 単一のワークグループの型
export interface WorkGroupProjection {
  workGroupId: number;
  staffIds: number[];
  capacity: number; // ここに追加済み
}

// ② チームの型
export interface TeamProjection {
  teamId: number;
  workGroups: WorkGroupProjection[]; // ①を参照するように修正
}

// ③ 1日分の投影データの型
export interface ScheduleDayProjection {
  date: string;
  teams: TeamProjection[]; // ②を参照するように修正
}

// ④ UI用のビューモデル
export interface ScheduleViewModel extends ScheduleDayProjection {
  assignments: Record<number, { teamId: number; workGroupId: number }>;
}