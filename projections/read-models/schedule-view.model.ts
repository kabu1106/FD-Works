// domain/projections/read-models/schedule-view.model.ts

export interface ScheduleViewModel {
    date: string;
    // 構造化されたデータ（既存の階層）
    teams: {
      teamId: number;
      workGroups: {
        workGroupId: number;
        staffIds: number[];
      }[];
    }[];
  
    // 【正規化データ】逆引きインデックス
    // staffId をキーにして、その職員が所属する場所を即座に引ける
    staffAssignmentMap: Record<number, {
      teamId: number;
      workGroupId: number;
    }>;
  }