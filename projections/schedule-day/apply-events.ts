import { ScheduleEvent } from '@/domain/shared/schedule-events'
import { ScheduleDayProjection } from './schedule-day.projection'
import { removeStaff, addStaff } from './staff-helpers'
import { ScheduleViewModel } from '../read-models/schedule-view.model'

function assertNever(x: never): never {
  throw new Error(`Unhandled event: ${JSON.stringify(x)}`)
}

// domain/projections/apply-events.ts

export function applyScheduleEvent(
  projection: ScheduleDayProjection,
  event: ScheduleEvent
): ScheduleDayProjection {
  // 初期化漏れ対策
  const currentUnassigned = projection.unassignedStaffs || [];

  switch (event.type) {
    case 'STAFF_ASSIGNED': {
      return {
        ...projection,
        unassignedStaffs: currentUnassigned.filter(s => s.id !== event.staffId),
        teams: projection.teams.map(team =>
          team.teamId !== event.to.teamId
            ? team
            : {
                ...team,
                workGroups: team.workGroups.map(group =>
                  group.workGroupId !== event.to.workGroupId
                    ? group
                    : { ...group, staffIds: addStaff(group.staffIds, event.staffId) }
                ),
              }
        ),
      };
    }

    case 'STAFF_REMOVED': {
      const alreadyUnassigned = currentUnassigned.some(s => s.id === event.staffId);
      return {
        ...projection,
        unassignedStaffs: alreadyUnassigned 
          ? currentUnassigned 
          : [...currentUnassigned, { id: event.staffId, name: `職員 ${event.staffId}` }],
        teams: projection.teams.map(team =>
          team.teamId !== event.from.teamId
            ? team
            : {
                ...team,
                workGroups: team.workGroups.map(group =>
                  group.workGroupId !== event.from.workGroupId
                    ? group
                    : { ...group, staffIds: removeStaff(group.staffIds, event.staffId) }
                ),
              }
        ),
      };
    }

    case 'STAFF_MOVED': {
      return {
        ...projection,
        // ここが重要：MOVED では unassignedStaffs をそのまま引き継ぐ
        unassignedStaffs: currentUnassigned, 
        teams: projection.teams.map(team => ({
          ...team,
          workGroups: team.workGroups.map(group => {
            let nextStaffIds = [...group.staffIds];
            
            // 1. 移動元なら削除
            if (team.teamId === event.from.teamId && group.workGroupId === event.from.workGroupId) {
              nextStaffIds = removeStaff(nextStaffIds, event.staffId);
            }
            // 2. 移動先なら追加（else if にしないことで同一グループ内の移動でも不整合を防ぐ）
            if (team.teamId === event.to.teamId && group.workGroupId === event.to.workGroupId) {
              nextStaffIds = addStaff(nextStaffIds, event.staffId);
            }
            
            return { ...group, staffIds: nextStaffIds };
          })
        }))
      };
    }

    case 'STAFF_SWAPPED': {
      // 1回目の移動を適用
      const stateAfterA = applyScheduleEvent(projection, {
        type: 'STAFF_MOVED',
        date: event.date,
        staffId: event.staffA.staffId,
        from: event.staffA.from,
        to: event.staffA.to, // 修正: 引数の構造に合わせる
      });

      // 2回目の移動を適用
      return applyScheduleEvent(stateAfterA, {
        type: 'STAFF_MOVED',
        date: event.date,
        staffId: event.staffB.staffId,
        from: event.staffB.from,
        to: event.staffB.to,
      });
    }

    default:
      return assertNever(event);
  }
}