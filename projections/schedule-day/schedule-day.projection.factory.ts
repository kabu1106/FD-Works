import { ScheduleDayProjection } from "./schedule-day.projection"

/**
 * DBから取得したマスタ情報を元に、その日の初期プロジェクションを生成する
 */
export function createInitialScheduleDay(
  date: string,
  // 将来的にDBから取得する「チームとグループの構成データ」
  config: {
    teams: {
      teamId: number;
      name: string;
      workGroups: {
        workGroupId: number;
        name: string;
      }[];
    }[];
    // DBから取得した「その日に出勤予定の全職員」
    allStaffs: { id: number; name: string }[];
  }
): ScheduleDayProjection {
  return {
    date,
    // 1. 最初は全員を「未配置」としてセット
    unassignedStaffs: config.allStaffs,
    
    // 2. チームとグループの構造を組み立て
    teams: config.teams.map(team => ({
      teamId: team.teamId,
      name: team.name,
      workGroups: team.workGroups.map(wg => ({
        workGroupId: wg.workGroupId,
        name: wg.name,
        staffIds: [], // 配置イベントが適用される前なので空
      })),
    })),
  }
}