// domain/handlers/schedule-command-handler.ts 内（または別ファイルからインポート）

import { ScheduleCommand } from "../commands/schedule-commands";
import { ScheduleEvent } from "../shared/schedule-events";

export function convertToEvent(cmd: ScheduleCommand): ScheduleEvent {
    switch (cmd.type) {
      case 'ASSIGN_STAFF_TO_WORK_GROUP':
        return {
          type: 'STAFF_ASSIGNED',
          date: cmd.date,
          staffId: cmd.staffId,
          to: cmd.to,
        };
  
      case 'MOVE_STAFF_BETWEEN_WORK_GROUPS':
        return {
          type: 'STAFF_MOVED',
          date: cmd.date,
          staffId: cmd.staffId,
          from: cmd.from,
          to: cmd.to,
        };
  
      case 'REMOVE_STAFF_FROM_WORK_GROUP':
        return {
          type: 'STAFF_REMOVED',
          date: cmd.date,
          staffId: cmd.staffId,
          from: cmd.from,
        };
  
      case 'SWAP_STAFF':
        return {
          type: 'STAFF_SWAPPED',
          date: cmd.date,
          staffA: cmd.staffA,
          staffB: cmd.staffB,
        };
  
      default:
        // Exhaustive Check (すべての型が網羅されていることを保証)
        const _exhaustiveCheck: never = cmd;
        throw new Error(`Unhandled command type: ${(cmd as any).type}`);
    }
  }