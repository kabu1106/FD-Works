import { ScheduleEvent } from '@/domain/events/schedule-events'
import { ScheduleDayProjection } from './schedule-day.projection'
import { removeStaff, addStaff } from './staff-helpers'
import { ScheduleViewModel } from '../read-models/schedule-view.model'

function assertNever(x: never): never {
  throw new Error(`Unhandled event: ${JSON.stringify(x)}`)
}

export function applyScheduleEvent(
  projection: ScheduleDayProjection,
  event: ScheduleEvent
): ScheduleDayProjection {

  switch (event.type) {

    // =====================
    // ASSIGN
    // =====================
    case 'STAFF_ASSIGNED':
      return {
        ...projection,
        teams: projection.teams.map(team =>
          team.teamId !== event.to.teamId
            ? team
            : {
                ...team,
                workGroups: team.workGroups.map(group =>
                  group.workGroupId !== event.to.workGroupId
                    ? group
                    : {
                        ...group,
                        staffIds: addStaff(group.staffIds, event.staffId),
                      }
                ),
              }
        ),
      }

    // =====================
    // REMOVED
    // =====================
    case 'STAFF_REMOVED':
      return {
        ...projection,
        teams: projection.teams.map(team =>
          team.teamId !== event.from.teamId
            ? team
            : {
                ...team,
                workGroups: team.workGroups.map(group =>
                  group.workGroupId !== event.from.workGroupId
                    ? group
                    : {
                        ...group,
                        staffIds: removeStaff(group.staffIds, event.staffId),
                      }
                ),
              }
        ),
      }

    // =====================
    // MOVED
    // =====================
    case 'STAFF_MOVED':
      return {
        ...projection,
        teams: projection.teams.map(team => {
          if (
            team.teamId !== event.from.teamId &&
            team.teamId !== event.to.teamId
          ) {
            return team
          }

          return {
            ...team,
            workGroups: team.workGroups.map(group => {

              // from
              if (
                team.teamId === event.from.teamId &&
                group.workGroupId === event.from.workGroupId
              ) {
                return {
                  ...group,
                  staffIds: removeStaff(group.staffIds, event.staffId),
                }
              }

              // to
              if (
                team.teamId === event.to.teamId &&
                group.workGroupId === event.to.workGroupId
              ) {
                return {
                  ...group,
                  staffIds: addStaff(group.staffIds, event.staffId),
                }
              }

              return group
            }),
          }
        }),
      }

    // =====================
    // SWAPPED
    // =====================
    case 'STAFF_SWAPPED': {
      const afterFirstMove = applyScheduleEvent(projection, {
        type: 'STAFF_MOVED',
        date: event.date,
        staffId: event.staffA.staffId,
        from: event.staffA.from,
        to: event.staffB.from,
      })

      return applyScheduleEvent(afterFirstMove, {
        type: 'STAFF_MOVED',
        date: event.date,
        staffId: event.staffB.staffId,
        from: event.staffB.from,
        to: event.staffA.from,
      })
    }

    default:
      return assertNever(event)
  }
}

/**
 * Projection の状態から、UIに最適化された Read Model を生成する
 */
export function buildViewModel(projection: ScheduleDayProjection): ScheduleViewModel {
  const staffAssignmentMap: Record<number, { teamId: number; workGroupId: number }> = {};

  projection.teams.forEach(team => {
    team.workGroups.forEach(group => {
      group.staffIds.forEach(staffId => {
        staffAssignmentMap[staffId] = {
          teamId: team.teamId,
          workGroupId: group.workGroupId
        };
      });
    });
  });

  return {
    ...projection,
    staffAssignmentMap
  };
}