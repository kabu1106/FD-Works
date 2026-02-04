import {
    ScheduleStatus,
    WorkType,
    ShiftType,
  } from './index'
  
  // =====================
  // 勤務表1日分（画面ルート）
  // =====================
  
  export interface ScheduleDayUI {
    date: string // YYYY-MM-DD
    status: ScheduleStatus
    isLocked: boolean
  
    teams: ScheduleDayTeamUI[]
  
    specialLeaves: ScheduleDaySpecialLeaveUI[]
  }
  
  // =====================
  // チーム単位
  // =====================
  
  export interface ScheduleDayTeamUI {
    teamId: number
    teamName: string
    shiftType: ShiftType
    workType: WorkType
  
    workGroups: ScheduleDayWorkGroupUI[]
  }
  
  // =====================
  // 勤務グループ
  // =====================
  
  export interface ScheduleDayWorkGroupUI {
    workGroupId: number
    workGroupName: string
  
    staffs: ScheduleDayStaffUI[]
  }
  
  // =====================
  // 職員
  // =====================
  
  export interface ScheduleDayStaffUI {
    staffId: number
    staffNo: string
    name: string
  
    isAssigned: boolean
    isOnLeave: boolean
  
    attendance?: {
      startTime?: string
      endTime?: string
    }
  }
  
  // =====================
  // 休暇（当日分）
  // =====================
  
  export interface ScheduleDaySpecialLeaveUI {
    staffId: number
    staffName: string
  
    leaveType: {
      id: string
      name: string
      color?: string
    }
  
    startTime: string
    endTime: string
  }
  