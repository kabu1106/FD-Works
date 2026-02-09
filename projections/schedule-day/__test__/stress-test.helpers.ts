// domain/projections/__test__/stress-test.helpers.ts

import { ScheduleEvent } from '@/domain/shared/schedule-events';

export const generateRandomEvents = (count: number, staffIds: number[], workGroupIds: {teamId: number, wgId: number}[]): ScheduleEvent[] => {
  const events: ScheduleEvent[] = [];
  const date = '2026-02-01';

  for (let i = 0; i < count; i++) {
    const staffId = staffIds[Math.floor(Math.random() * staffIds.length)];
    const target = workGroupIds[Math.floor(Math.random() * workGroupIds.length)];
    const typeIndex = Math.floor(Math.random() * 3); // 0: Assign, 1: Move, 2: Remove

    if (typeIndex === 0) {
      events.push({
        type: 'STAFF_ASSIGNED',
        date,
        staffId,
        to: { teamId: target.teamId, workGroupId: target.wgId }
      });
    } else if (typeIndex === 1) {
      events.push({
        type: 'STAFF_MOVED',
        date,
        staffId,
        from: { teamId: 1, workGroupId: 101 }, // 簡易化のため固定（本来は現在の状態から取得）
        to: { teamId: target.teamId, workGroupId: target.wgId }
      });
    } else {
      events.push({
        type: 'STAFF_REMOVED',
        date,
        staffId,
        from: { teamId: target.teamId, workGroupId: target.wgId }
      });
    }
  }
  return events;
};