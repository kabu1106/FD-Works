import { CommandBase } from './base'

// =====================
// 勤務表 Command Union
// =====================

export type ScheduleCommand =
  | AssignStaffToWorkGroupCommand
  | RemoveStaffFromWorkGroupCommand
  | MoveStaffBetweenWorkGroupsCommand
  | SwapStaffCommand
  | RegisterSpecialLeaveCommand

  export interface AssignStaffToWorkGroupCommand extends CommandBase {
    type: 'ASSIGN_STAFF_TO_WORK_GROUP'
  
    date: string
  
    staffId: number
  
    to: {
      teamId: number
      workGroupId: number
    }
  }

  export interface RemoveStaffFromWorkGroupCommand extends CommandBase {
    type: 'REMOVE_STAFF_FROM_WORK_GROUP'
  
    date: string
  
    staffId: number
  
    from: {
      teamId: number
      workGroupId: number
    }
  }

  export interface MoveStaffBetweenWorkGroupsCommand extends CommandBase {
    type: 'MOVE_STAFF_BETWEEN_WORK_GROUPS'
  
    date: string
  
    staffId: number
  
    from: {
      teamId: number
      workGroupId: number
    }
  
    to: {
      teamId: number
      workGroupId: number
    }
  }

  export interface SwapStaffCommand extends CommandBase {
    type: 'SWAP_STAFF'
  
    date: string
  
    staffA: {
      staffId: number
      from: {
        teamId: number
        workGroupId: number
      }
    
      to: {
        teamId: number
        workGroupId: number
      }
    }
  
    staffB: {
      staffId: number
      from: {
        teamId: number
        workGroupId: number
      }
    
      to: {
        teamId: number
        workGroupId: number
      }
    }
  }

  export interface RegisterSpecialLeaveCommand {
    type: 'REGISTER_SPECIAL_LEAVE';
    date: string;
    staffId: number;
    leaveTypeId: string;
  }
