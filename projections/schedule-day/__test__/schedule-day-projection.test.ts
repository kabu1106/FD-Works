// domain/projections/__test__/schedule-day-projection.test.ts
import { applyScheduleEvent } from '../apply-events'
import { checkInvariants, InvariantViolationError } from '../schedule-validator';
import { ScheduleDayProjection } from '../schedule-day.projection';
import { ScheduleEvent } from '@/domain/events/schedule-events';

const createEmptyProjection = (): ScheduleDayProjection => ({
  date: '2026-02-01',
  teams: [
    {
      teamId: 1,
      workGroups: [
        { workGroupId: 101, staffIds: [],capacity: 10 },
        { workGroupId: 102, staffIds: [],capacity: 10 }
      ]
    }
  ]
});

describe('ScheduleDayProjection & Invariants', () => {
  
  it('正常系: 職員を割り当てて、別のグループに移動できる', () => {
    let state = createEmptyProjection();

    // 1. 割り当て (staffId は number に修正)
    const assignEvent: ScheduleEvent = { 
      type: 'STAFF_ASSIGNED', 
      staffId: 10, 
      to: { teamId: 1, workGroupId: 101 }, 
      date: '2026-02-01' 
    };
    checkInvariants(state, assignEvent);
    state = applyScheduleEvent(state, assignEvent);
    
    expect(state.teams[0].workGroups[0].staffIds).toContain(10);

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
  });

  it('異常系: すでに配置済みの職員を再度割り当てようとするとエラー', () => {
    let state = createEmptyProjection();
    const event1: ScheduleEvent = { 
      type: 'STAFF_ASSIGNED', 
      staffId: 10, 
      to: { teamId: 1, workGroupId: 101 }, 
      date: '2026-02-01' 
    };
    state = applyScheduleEvent(state, event1);

    const event2: ScheduleEvent = { 
      type: 'STAFF_ASSIGNED', 
      staffId: 10, 
      to: { teamId: 1, workGroupId: 102 }, 
      date: '2026-02-01' 
    };
    
    expect(() => checkInvariants(state, event2)).toThrow(InvariantViolationError);
  });
});