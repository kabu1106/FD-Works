// 職員
export interface Employee {
  id: string
  employeeNumber: string // 職員番号
  name: string // 名前
  department: string // 所属
}

// 所属
export type Department = string

// 仮眠時間グループ
export type SleepGroup = 'group1' | 'group2' | 'group3' | 'group4' | 'weekend'

// 仮眠時間グループの定義
export interface SleepGroupDefinition {
  id: SleepGroup
  label: string
  timeRanges: string[]
}

// 特別休暇種別
export type SpecialLeaveType = '年次休暇' | '夏季休暇' | '慶弔休暇' | 'その他'

// 特別休暇
export interface SpecialLeave {
  id: string
  employeeId: string
  type: SpecialLeaveType
  baseDate: string // 選択された日付（YYYY-MM-DD形式）
  startDate: string // YYYY-MM-DD形式
  startTime: string // HH:mm形式（24:00表記、例: "8:30", "24:00"）
  startMinutes: number // 分単位（データベース登録用）
  endDate: string // YYYY-MM-DD形式
  endTime: string // HH:mm形式（24:00表記、例: "17:00", "24:00"）
  endMinutes: number // 分単位（データベース登録用）
}

// 勤務表の1日のデータ
export interface WorkScheduleDay {
  date: string // YYYY-MM-DD形式
  sleepGroups: {
    [key in SleepGroup]: string[] // 職員IDの配列
  }
  specialLeaves: SpecialLeave[]
}

// 勤務表全体
export interface WorkSchedule {
  [date: string]: WorkScheduleDay
}