// domain/history/undo-command-factory.ts

import { ScheduleCommand } from "../commands/schedule-commands";

export function createInverseCommand(command: ScheduleCommand): ScheduleCommand {
    const inverseId = crypto.randomUUID();
  
    switch (command.type) {
      case 'ASSIGN_STAFF_TO_WORK_GROUP':
        // 配属の逆は「解除」
        return {
          ...command,
          commandId: inverseId,
          type: 'REMOVE_STAFF_FROM_WORK_GROUP',
          from: command.to // 配置先から削除する
        };
  
      case 'REMOVE_STAFF_FROM_WORK_GROUP':
        // 解除の逆は「配属」
        return {
          ...command,
          commandId: inverseId,
          type: 'ASSIGN_STAFF_TO_WORK_GROUP',
          to: command.from
        };
  
      case 'MOVE_STAFF_BETWEEN_WORK_GROUPS':
        // 移動の逆は「元いた場所への移動」
        return {
          ...command,
          commandId: inverseId,
          type: 'MOVE_STAFF_BETWEEN_WORK_GROUPS',
          from: command.to,
          to: command.from
        };
  
      case 'SWAP_STAFF':
        // 入れ替えの逆は「再度入れ替え」
        return {
          ...command,
          commandId: inverseId,
          type: 'SWAP_STAFF',
          staffA: { ...command.staffA, from: command.staffA.to, to: command.staffA.from },
          staffB: { ...command.staffB, from: command.staffB.to, to: command.staffB.from }
        };
    }
  }