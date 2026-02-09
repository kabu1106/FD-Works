// domain/projections/__test__/stress.test.ts
import { describe, it, expect } from 'vitest';
import { applyScheduleEvent } from '../apply-events';
import { checkInvariants } from '../schedule-validator';
import { generateRandomEvents } from './stress-test.helpers';
import { ScheduleDayProjection } from '../schedule-day.projection';

describe('ScheduleDay Stress Test', () => {
  it('1000個のランダムイベントを適用しても不整合が起きない', () => {
    // 1. 初期状態の定義（50人全員を unassignedStaffs に入れてスタート）
    const staffIds = Array.from({ length: 50 }, (_, i) => i + 1);
    const initialStaffs = staffIds.map(id => ({ id, name: `職員 ${id}` }));

    let state: ScheduleDayProjection = {
      date: '2026-02-01',
      unassignedStaffs: initialStaffs, // 全員未配置から開始
      teams: [
        { 
          teamId: 1, 
          name: '1担当',
      workGroups: [
        { workGroupId: 101, staffIds: [], name: '1番起' },
        { workGroupId: 102, staffIds: [], name: '1番起' },
          ] 
        }
      ]
    };

    const workGroups = [{ teamId: 1, wgId: 101 }, { teamId: 1, wgId: 102 }];
    const events = generateRandomEvents(1000, staffIds, workGroups);

    events.forEach(event => {
      try {
        // 不変条件を満たす場合のみ適用
        checkInvariants(state, event);
        state = applyScheduleEvent(state, event);
      } catch (e) {
        // バリデーションエラーは「正しい拒否」なのでスキップ
      }
    });

    // --- 整合性チェック ---

    // A. 配置済みの職員リスト
    const allAssigned = state.teams.flatMap(t => t.workGroups.flatMap(g => g.staffIds));
    // B. 未配置の職員リスト
    const allUnassigned = state.unassignedStaffs.map(s => s.id);

    // 2. 二重存在のチェック（配置済みと未配置に重複がないこと）
    const assignedSet = new Set(allAssigned);
    const unassignedSet = new Set(allUnassigned);
    const intersection = [...assignedSet].filter(id => unassignedSet.has(id));

    // 3. 総数のチェック（配置済み + 未配置 = 50人）
    const totalCount = allAssigned.length + allUnassigned.length;

    // 検証
    expect(intersection).toEqual([]); // 重複がないこと
    expect(allAssigned.length).toBe(assignedSet.size); // 配置済みの中に重複がないこと
    expect(totalCount).toBe(50); // 合計人数が常に50人であること（職員が消えたり増えたりしていない）

    console.log(`Stress Test Done: Assigned=${allAssigned.length}, Unassigned=${allUnassigned.length}`);
  });
});