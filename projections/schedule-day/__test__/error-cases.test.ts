// domain/projections/__test__/error-cases.test.ts

import { ScheduleEvent } from "@/domain/events/schedule-events";
import { applyScheduleEvent } from "../apply-events";
import { ScheduleDayProjection } from "../schedule-day.projection";
import { checkInvariants,InvariantViolationError } from "../schedule-validator";

describe('ScheduleDayProjection 異常系テスト', () => {
    const createBaseState = (): ScheduleDayProjection => ({
      date: '2026-02-01',
      teams: [{ 
        teamId: 1, 
        workGroups: [{ workGroupId: 101, staffIds: [10],capacity: 10 }] // Staff 10 が 101 にいる
      }]
    });
  
    it('存在しない WorkGroup に配属しようとするとエラー', () => {
      const state = createBaseState();
      const event: ScheduleEvent = {
        type: 'STAFF_ASSIGNED',
        staffId: 20,
        to: { teamId: 1, workGroupId: 999 }, // 存在しないID
        date: '2026-02-01'
      };
      expect(() => checkInvariants(state, event)).toThrow(/does not exist/);
    });
  
    it('存在しない職員を移動させようとするとエラー', () => {
      const state = createBaseState();
      const event: ScheduleEvent = {
        type: 'STAFF_MOVED',
        staffId: 999, // 存在しない職員
        from: { teamId: 1, workGroupId: 101 },
        to: { teamId: 1, workGroupId: 101 },
        date: '2026-02-01'
      };
      // バリデーターで「そのグループにいない」として検知される
      expect(() => checkInvariants(state, event)).toThrow(/is not in WorkGroup/);
    });
  
    it('職員がいないグループから STAFF_REMOVED しても状態は変わらない（冪等性）', () => {
      const state = createBaseState();
      const event: ScheduleEvent = {
        type: 'STAFF_REMOVED',
        staffId: 99, // いない職員
        from: { teamId: 1, workGroupId: 101 },
        date: '2026-02-01'
      };
      
      // REMOVED は「結果としていないこと」を保証すれば良いため、
      // 厳格なエラーにせず、単に無視する設計がイベントソーシングでは一般的です。
      const newState = applyScheduleEvent(state, event);
      expect(newState).toEqual(state);
    });
  });

  // projections/schedule-day/__test__/error-cases.test.ts

describe('ScheduleDayProjection 異常系テスト（定員上限）', () => {
  const createCapacityLimitedState = (): ScheduleDayProjection => ({
    date: '2026-02-01',
    teams: [{ 
      teamId: 1, 
      workGroups: [
        { workGroupId: 101, staffIds: [10, 11], capacity: 2 } // すでに2人いて、定員も2名
      ] 
    }]
  });

  it('定員がいっぱいのグループに新しく配属しようとすると InvariantViolationError が発生する', () => {
    const state = createCapacityLimitedState();
    const event: ScheduleEvent = {
      type: 'STAFF_ASSIGNED',
      staffId: 99, // 新しい人
      to: { teamId: 1, workGroupId: 101 },
      date: '2026-02-01'
    };

    expect(() => checkInvariants(state, event)).toThrow(InvariantViolationError);
    expect(() => checkInvariants(state, event)).toThrow(/定員.*達しています/);
  });

  it('定員がいっぱいのグループに他から移動してこようとしてもエラーになる', () => {
    const state: ScheduleDayProjection = {
      date: '2026-02-01',
      teams: [{ 
        teamId: 1, 
        workGroups: [
          { workGroupId: 101, staffIds: [10], capacity: 5 }, // 移動元
          { workGroupId: 102, staffIds: [20, 21], capacity: 2 } // 移動先（満員）
        ] 
      }]
    };

    const event: ScheduleEvent = {
      type: 'STAFF_MOVED',
      staffId: 10,
      from: { teamId: 1, workGroupId: 101 },
      to: { teamId: 1, workGroupId: 102 },
      date: '2026-02-01'
    };

    expect(() => checkInvariants(state, event)).toThrow(InvariantViolationError);
  });
});