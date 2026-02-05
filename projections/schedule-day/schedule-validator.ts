// domain/projections/schedule-validator.ts
import { ScheduleDayProjection } from './schedule-day.projection';
import { ScheduleEvent } from '@/domain/events/schedule-events';

export class InvariantViolationError extends Error {
  constructor(message: string) {
    super(`Invariant Violation: ${message}`);
    this.name = 'InvariantViolationError';
  }
}

export const checkInvariants = (
  projection: ScheduleDayProjection,
  event: ScheduleEvent
): void => {

    const allGroups = projection.teams.flatMap(t => t.workGroups);
    const findGroup = (id: number) => allGroups.find(g => g.workGroupId === id);
  
    // 1. 存在チェック: 移動先や配属先の workGroup は存在するか？
    if (event.type === 'STAFF_ASSIGNED') {
      if (!findGroup(event.to.workGroupId)) {
        throw new InvariantViolationError(`Target WorkGroup ${event.to.workGroupId} does not exist.`);
      }
    }
  
    if (event.type === 'STAFF_MOVED') {
      if (!findGroup(event.from.workGroupId) || !findGroup(event.to.workGroupId)) {
        throw new InvariantViolationError(`Source or Target WorkGroup does not exist.`);
      }
      // 2. 存在チェック: 移動元のグループに、その職員は本当にいるか？
      const sourceGroup = findGroup(event.from.workGroupId);
      if (sourceGroup && !sourceGroup.staffIds.includes(event.staffId)) {
        throw new InvariantViolationError(`Staff ${event.staffId} is not in WorkGroup ${event.from.workGroupId}.`);
      }
    }

    // 定員チェックが必要なイベント
    if (event.type === 'STAFF_ASSIGNED' || event.type === 'STAFF_MOVED') {
      const targetGroupId = event.type === 'STAFF_ASSIGNED' ? event.to.workGroupId : event.to.workGroupId;
      const targetGroup = allGroups.find(g => g.workGroupId === targetGroupId);
  
      if (targetGroup) {
        // 同じグループ内での移動（位置変更など）は定員チェックを除外する工夫
        const isInternalMove = event.type === 'STAFF_MOVED' && event.from.workGroupId === event.to.workGroupId;
  
        if (!isInternalMove && targetGroup.staffIds.length >= targetGroup.capacity) {
          throw new InvariantViolationError(
            `WorkGroup ${targetGroupId} は定員（${targetGroup.capacity}名）に達しています。`
          );
        }
      }
    }

  // 1. 同一スタッフの重複配置禁止
  if (event.type === 'STAFF_ASSIGNED') {
    const isAlreadyAssigned = projection.teams.some(team =>
      team.workGroups.some(group => group.staffIds.includes(event.staffId))
    );
    if (isAlreadyAssigned) {
      throw new InvariantViolationError(`Staff ${event.staffId} is already assigned.`);
    }
  }

  // 2. 定員チェック (対象の workGroupId を取得して判定)
  if (event.type === 'STAFF_ASSIGNED' || event.type === 'STAFF_MOVED') {
    const targetGroupId = event.type === 'STAFF_ASSIGNED' 
      ? event.to.workGroupId 
      : event.to.workGroupId;

    const targetGroup = projection.teams
      .flatMap(t => t.workGroups)
      .find(g => g.workGroupId === targetGroupId);

    const CAPACITY_LIMIT = 5; 
    if (targetGroup && targetGroup.staffIds.length >= CAPACITY_LIMIT) {
      throw new InvariantViolationError(`WorkGroup ${targetGroupId} is full.`);
    }
  }
};
