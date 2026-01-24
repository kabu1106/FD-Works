/**
 * 勤務表ドメインの型定義
 * データベースモデルとは独立したドメイン層の型
 */

import { SleepGroup, SpecialLeaveType, WorkScheduleStatus, UserRole } from '@/types'

/**
 * 勤務表の1日のドメインモデル
 */
export interface ScheduleDayDomain {
  id: string
  date: string // YYYY-MM-DD形式
  status: WorkScheduleStatus
  hasEverCancelled: boolean
  sleepGroups: {
    [key in SleepGroup]: string[] // 職員IDの配列
  }
  specialLeaves: SpecialLeaveDomain[]
}

/**
 * 特別休暇のドメインモデル
 */
export interface SpecialLeaveDomain {
  id: string
  employeeId: string
  type: SpecialLeaveType
  baseDate: string // YYYY-MM-DD形式
  startDate: string // YYYY-MM-DD形式
  startTime: string // HH:mm形式
  startMinutes: number // 分単位（baseDateを基準とした分）
  endDate: string // YYYY-MM-DD形式
  endTime: string // HH:mm形式
  endMinutes: number // 分単位（baseDateを基準とした分）
}

/**
 * 勤務表の状態更新オプション
 */
export interface UpdateScheduleStatusOptions {
  markCancelled?: boolean
}
