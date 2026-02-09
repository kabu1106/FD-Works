// domain/commands/command-factory.ts

import { CommandBase } from './base';
import { 
    ScheduleCommand, 
    MoveStaffBetweenWorkGroupsCommand, 
    AssignStaffToWorkGroupCommand,
    RemoveStaffFromWorkGroupCommand,
    SwapStaffCommand, 
  } from './schedule-commands';
  
  export function createCommand(
    payload: Omit<MoveStaffBetweenWorkGroupsCommand, keyof CommandBase>
  ): MoveStaffBetweenWorkGroupsCommand;
  
  export function createCommand(
    payload: Omit<RemoveStaffFromWorkGroupCommand, keyof CommandBase>
  ): RemoveStaffFromWorkGroupCommand;

  export function createCommand(
    payload: Omit<SwapStaffCommand, keyof CommandBase>
  ): SwapStaffCommand;
  
  export function createCommand(
    payload: Omit<AssignStaffToWorkGroupCommand, keyof CommandBase>
  ): AssignStaffToWorkGroupCommand;
  
  // 実装
  export function createCommand(payload: any): any {
    return {
      ...payload,
      commandId: crypto.randomUUID(),
      executedAt: new Date().toISOString(),
      executedBy: 'system-user',
    };
  }