// domain/projections/__test__/schedule-day-projection.test.ts

import { applyScheduleEvent } from '../apply-events'
import { checkInvariants, InvariantViolationError } from '../schedule-validator';
import { ScheduleDayProjection } from '../schedule-day.projection';
import { ScheduleEvent } from '@/domain/shared/schedule-events';

// --- 修正: unassignedStaffs を追加 ---
const createEmptyProjection = (): ScheduleDayProjection => ({
  date: '2026-02-01',
  unassignedStaffs: [], // 初期値は空
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
});

describe('ScheduleDayProjection & Invariants', () => {
  
  it('正常系: 職員を割り当てて、別のグループに移動できる', () => {
    let state = createEmptyProjection();
    
    // 事前準備: 職員10番を未配置リストに入れておく
    state.unassignedStaffs = [{ id: 10, name: '職員 10' }];

    // 1. 割り当て
    const assignEvent: ScheduleEvent = { 
      type: 'STAFF_ASSIGNED', 
      staffId: 10, 
      to: { teamId: 1, workGroupId: 101 }, 
      date: '2026-02-01' 
    };
    checkInvariants(state, assignEvent);
    state = applyScheduleEvent(state, assignEvent);
    
    // 検証: グループに追加され、未配置リストからは消えていること
    expect(state.teams[0].workGroups[0].staffIds).toContain(10);
    expect(state.unassignedStaffs.find(s => s.id === 10)).toBeUndefined();

    // 2. 移動
    const moveEvent: ScheduleEvent = { 
      type: 'STAFF_MOVED', 
      staffId: 10, 
      from: { teamId: 1, workGroupId: 101 }, 
      to: { teamId: 1, workGroupId: 102 }, 
      date: '2026-02-01' 
    };
    checkInvariants(state, moveEvent);
    state = applyScheduleEvent(state, moveEvent);

    expect(state.teams[0].workGroups[0].staffIds).not.toContain(10);
    expect(state.teams[0].workGroups[1].staffIds).toContain(10);
    // 移動では未配置リストは変わらない
    expect(state.unassignedStaffs).toHaveLength(0);
  });

  it('正常系: 職員を解除すると未配置リストに戻る', () => {
    let state = createEmptyProjection();
    // 職員10がグループ101にいる状態を作る
    state.teams[0].workGroups[0].staffIds = [10];

    const removeEvent: ScheduleEvent = {
      type: 'STAFF_REMOVED',
      staffId: 10,
      from: { teamId: 1, workGroupId: 101 },
      date: '2026-02-01'
    };

    state = applyScheduleEvent(state, removeEvent);

    expect(state.teams[0].workGroups[0].staffIds).not.toContain(10);
    // 未配置リストに復帰していること
    expect(state.unassignedStaffs).toContainEqual(expect.objectContaining({ id: 10 }));
  });

  it('異常系: すでに配置済みの職員を再度割り当てようとするとエラー', () => {
    let state = createEmptyProjection();
    // 既に配置済み（未配置リストにはいない）
    state.teams[0].workGroups[0].staffIds = [10];

    const event2: ScheduleEvent = { 
      type: 'STAFF_ASSIGNED', 
      staffId: 10, 
      to: { teamId: 1, workGroupId: 102 }, 
      date: '2026-02-01' 
    };
    
    expect(() => checkInvariants(state, event2)).toThrow(InvariantViolationError);
  });
});