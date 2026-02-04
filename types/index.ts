// =====================
// Enums
// =====================

export type UserRole = 'ADMINISTRATOR' | 'APPROVER' | 'GENERAL'

export type ShiftType = 'DUTY_24H' | 'DAY_SHIFT'

export type WorkType =
  | 'DUTY_24H'
  | 'DAY_SHIFT'
  | 'OFF_DUTY'
  | 'DAY_OFF'

export type ScheduleStatus =
  | 'UNAPPROVED'
  | 'APPROVED'
  | 'PENDING'

export type TeamWorkOverrideReason =
  | 'DISASTER'
  | 'SPECIAL_EVENT'
  | 'STAFF_SHORTAGE'
  | 'MANUAL'

export type AttendanceType =
  | 'WORK_START'
  | 'BREAK_START'
  | 'BREAK_OUT'
  | 'WORK_OUT'

export type LocationType =
  | 'PREFECTURE'
  | 'MUNICIPALITY'
  | 'TOWN'
  | 'OAZA'
  | 'AZA'
  | 'CHOME'

  // =====================
// User / Staff
// =====================

export interface UserUI {
  id: string
  loginId: string
  name?: string
  email?: string
  role: UserRole
  staff?: StaffUI
}

export interface StaffUI {
  id: number
  staffNo: string
  name: string
  isActive: boolean
  photoKey?: string
  team: {
    id: number
    name: string
  }
}

// =====================
// Organization
// =====================

export interface DepartmentUI {
  id: number
  code: string
  name: string
  latitude?: number
  longitude?: number
  isActive: boolean
}

export interface TeamUI {
  id: number
  code: string
  name: string
  shiftType: ShiftType
  isActive: boolean
  department: DepartmentUI
}

export interface WorkShiftUI {
  id: number
  code: string
  name: string
  shiftType: ShiftType
  isActive: boolean
}

// =====================
// Schedule
// =====================

export interface TeamWorkDayUI {
  id: string
  date: string
  type: WorkType
  teamId: number
  overrides?: TeamWorkOverrideUI[]
}

export interface TeamWorkOverrideUI {
  id: string
  overriddenType: WorkType
  reason: TeamWorkOverrideReason
  memo: string
  createdAt: string
}

export interface DutyUI {
  id: string
  date: string
  status: ScheduleStatus
  memo: string
  isLocked: boolean
  team: {
    id: number
    name: string
  }
}

// =====================
// Assignment
// =====================

export interface WorkGroupUI {
  id: number
  code: string
  name: string
}

export interface WorkGroupAssignmentUI {
  id: string
  staff: {
    id: number
    name: string
  }
  workGroup: WorkGroupUI
}

export interface SpecialLeaveUI {
  id: string
  staff: {
    id: number
    name: string
  }
  type: {
    id: string
    name: string
    color?: string
  }
  baseDate: string
  startTime: string
  endTime: string
}

// =====================
// Incident
// =====================

export interface IncidentUI {
  id: string
  category: {
    id: number
    name: string
    color: string
  }
  type: {
    id: number
    name: string
  }
  location: {
    id: number
    name: string
  }
  destination?: {
    id: number
    name: string
  }
  vehicles: IncidentVehicleUI[]
  createdAt: string
}

export interface IncidentVehicleUI {
  id: string
  vehicle: {
    id: number
    name: string
  }
  dispatchTime: string
  returnTime: string
  staffs: IncidentStaffUI[]
}

export interface IncidentStaffUI {
  id: string
  staff: {
    id: number
    name: string
  }
  allowances: {
    id: number
    name: string
  }[]
}

// =====================
// Attendance / Overtime
// =====================

export interface AttendanceUI {
  id: string
  type: AttendanceType
  startTime: string
  endTime: string
  staff: {
    id: number
    name: string
  }
}

export interface OvertimeSummaryUI {
  id: string
  staff: {
    id: number
    name: string
  }
  totalMinutes: number
  isFinalized: boolean
  details: OvertimeSummaryDetailUI[]
}

export interface OvertimeSummaryDetailUI {
  rate: number
  minutes: number
  category: {
    id: number
    name: string
    color?: string
  }
}

// =====================
// Location
// =====================

export interface LocationUI {
  id: number
  type: LocationType
  name: string
  parentId?: number
  children?: LocationUI[]
}
