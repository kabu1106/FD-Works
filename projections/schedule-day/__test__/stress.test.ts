// domain/projections/__test__/stress.test.ts
import { describe, it, expect } from 'vitest';
import { applyScheduleEvent } from '../apply-events';
import { checkInvariants } from '../schedule-validator';
import { generateRandomEvents } from './stress-test.helpers';
import { ScheduleDayProjection } from '../schedule-day.projection';

describe('ScheduleDay Stress Test', () => {
  it('1000個のランダムイベントを適用しても不整合が起きない', () => {
    let state: ScheduleDayProjection = {
      date: '2026-02-01',
      teams: [
        { teamId: 1, workGroups: [{ workGroupId: 101, staffIds: [],capacity: 10 }, { workGroupId: 102, staffIds: [],capacity: 10 }] }
      ]
    };

    const staffIds = Array.from({ length: 50 }, (_, i) => i + 1); // 50人の職員
    const workGroups = [{ teamId: 1, wgId: 101 }, { teamId: 1, wgId: 102 }];
    
    const events = generateRandomEvents(1000, staffIds, workGroups);

    events.forEach(event => {
      try {
        // 不変条件を満たす場合のみ適用
        checkInvariants(state, event);
        state = applyScheduleEvent(state, event);
      } catch (e) {
        // InvariantViolationError は「正しい拒否」なので無視して続行
      }
    });

    // 最終チェック：全ての職員が「最大1箇所」にしか存在していないことを確認
    const allAssignedStaffIds = state.teams.flatMap(t => t.workGroups.flatMap(g => g.staffIds));
    const uniqueStaffIds = new Set(allAssignedStaffIds);
    
    expect(allAssignedStaffIds.length).toBe(uniqueStaffIds.size);
    console.log(`Final state: ${allAssignedStaffIds.length} staff members assigned.`);
  });
});