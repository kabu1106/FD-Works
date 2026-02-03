/* =========================
 * Master / Organization
 * ========================= */

// 所属（Department）
export interface Department {
  id: number
  code: string
  name: string
}

// 職員（Staff）
export interface Staff {
  id: number
  staffNo: string          // 職員番号（業務キー）
  name: string
  isActive: boolean
  photoKey?: string | null
  department: Department
}


/* =========================
 * User / Auth
 * ========================= */

// Prisma enum UserRole に対応
export type UserRole = 'ADMINISTRATOR' | 'APPROVER' | 'GENERAL'


/* =========================
 * Work Group
 * ========================= */

// 仮眠グループ
export interface WorkGroup {
  id: number
  code: string   // 例: "G1", "WEEKEND"
  name: string
  slots: WorkSlot[]
}

// 仮眠時間スロット
export interface WorkSlot {
  id: number
  startMinute: number // 0–1440
  endMinute: number   // 0–1440
}

// 仮眠割当（1日×職員）
export interface WorkGroupAssignment {
  id: string
  staffNo: string
  workGroup: WorkGroup
}


/* =========================
 * Schedule / Work
 * ========================= */

// Prisma enum ScheduleStatus に対応
export type ScheduleStatus = 'UNAPPROVED' | 'APPROVED' | 'PENDING'

// Prisma enum ShiftType に対応
export type ShiftType = 'DUTY24' | 'DAY'

// 勤務表（1日）
export interface ScheduleDay {
  id: string
  date: string              // YYYY-MM-DD
  shiftType: ShiftType
  status: ScheduleStatus
  hasEverCancelled: boolean

  workGroupAssignments: WorkGroupAssignment[]
  specialLeaveAssignments: SpecialLeaveAssignment[]
}


/* =========================
 * Special Leave
 * ========================= */

// 特別休暇
export interface SpecialLeaveAssignment {
  id: string
  staffNo: string

  baseDate: string          // YYYY-MM-DD
  startTime: string         // ISO DateTime
  endTime: string           // ISO DateTime

  specialLeaveType: SpecialLeaveType
}


export interface SpecialLeaveType {
  id: string
  code: string
  name: string
  isActive: boolean
  specialLeaveGroup: SpecialLeaveGroup
}


export interface SpecialLeaveGroup {
  id: string
  name: string
  color: string
  isActive: boolean
  sortOrder: number
}
