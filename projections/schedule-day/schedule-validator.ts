// domain/projections/schedule-validator.ts
import { ScheduleDayProjection } from './schedule-day.projection';
import { ScheduleEvent } from '@/domain/shared/schedule-events';

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

  // --- 1. 存在チェック（共通） ---
  if (event.type === 'STAFF_ASSIGNED') {
    if (!findGroup(event.to.workGroupId)) {
      throw new InvariantViolationError(`Target WorkGroup ${event.to.workGroupId} does not exist.`);
    }
    // ★追加: 未配置リストにいない（＝既にどこかに配置されている）場合はエラー
    // ※未配置リストを管理している場合、ここをチェックするのが最も確実です
    const isUnassigned = projection.unassignedStaffs.some(s => s.id === event.staffId);
    if (!isUnassigned) {
       throw new InvariantViolationError(`Staff ${event.staffId} is not in unassigned list.`);
    }
  }

  if (event.type === 'STAFF_REMOVED') {
    const sourceGroup = findGroup(event.from.workGroupId);
    if (!sourceGroup) {
      throw new InvariantViolationError(`Source WorkGroup ${event.from.workGroupId} does not exist.`);
    }
    // ★重要: 移動・削除の際は、対象のグループにその職員がいなければならない
    if (!sourceGroup.staffIds.includes(event.staffId)) {
      throw new InvariantViolationError(`Staff ${event.staffId} is not in WorkGroup ${event.from.workGroupId}.`);
    }
  }

  if (event.type === 'STAFF_MOVED') {
    const sourceGroup = findGroup(event.from.workGroupId);
    const targetGroup = findGroup(event.to.workGroupId);
    if (!sourceGroup || !targetGroup) {
      throw new InvariantViolationError(`Source or Target WorkGroup does not exist.`);
    }
    if (!sourceGroup.staffIds.includes(event.staffId)) {
      throw new InvariantViolationError(`Staff ${event.staffId} is not in WorkGroup ${event.from.workGroupId}.`);
    }
  }

  // --- 3. 同一スタッフの重複配置禁止（念のための最終防衛ライン） ---
  if (event.type === 'STAFF_ASSIGNED') {
    const isAlreadyInAnyGroup = projection.teams.some(team =>
      team.workGroups.some(group => group.staffIds.includes(event.staffId))
    );
    if (isAlreadyInAnyGroup) {
      throw new InvariantViolationError(`Staff ${event.staffId} is already assigned to a group.`);
    }
  }
};