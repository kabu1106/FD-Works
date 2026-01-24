/**
 * 勤務表サービス
 * 業務ロジックを実装し、リポジトリを呼び出す
 */

import { getScheduleDay, saveScheduleDay, updateScheduleStatus } from '@/lib/db/repositories/scheduleRepository'
import { ScheduleDayDomain, SpecialLeaveDomain, UpdateScheduleStatusOptions } from './types'
import { WorkScheduleStatus } from '@/types'
import { findOverlappingSpecialLeave } from './calculator'
import { convertToMinutes } from './datetime'

/**
 * 勤務表の1日を取得
 * 存在しない場合は初期値を作成して返す
 * @param date 日付（YYYY-MM-DD形式）
 * @returns 勤務表の1日のドメインモデル
 */
export async function getOrCreateScheduleDay(date: string): Promise<ScheduleDayDomain> {
  const existing = await getScheduleDay(date)
  if (existing) {
    return existing
  }

  // 初期値を作成
  return {
    id: '',
    date,
    status: '未承認',
    hasEverCancelled: false,
    sleepGroups: {
      group1: [],
      group2: [],
      group3: [],
      group4: [],
      weekend: [],
    },
    specialLeaves: [],
  }
}

/**
 * 勤務表の1日を保存
 * @param scheduleDay 勤務表の1日のドメインモデル
 */
export async function saveSchedule(scheduleDay: ScheduleDayDomain): Promise<void> {
  await saveScheduleDay(scheduleDay)
}

/**
 * 職員を仮眠時間グループに追加
 * @param scheduleDay 勤務表の1日のドメインモデル
 * @param employeeId 職員ID
 * @param sleepGroup 仮眠時間グループ
 * @returns 更新後の勤務表の1日のドメインモデル
 */
export function addEmployeeToSleepGroup(
  scheduleDay: ScheduleDayDomain,
  employeeId: string,
  sleepGroup: string
): ScheduleDayDomain {
  // 既に他のグループに配置されているかチェック
  const allAssignedIds = [
    ...scheduleDay.sleepGroups.group1,
    ...scheduleDay.sleepGroups.group2,
    ...scheduleDay.sleepGroups.group3,
    ...scheduleDay.sleepGroups.group4,
    ...scheduleDay.sleepGroups.weekend,
  ]

  if (allAssignedIds.includes(employeeId)) {
    // 既にこのグループに配置されている場合は何もしない
    if (scheduleDay.sleepGroups[sleepGroup as keyof typeof scheduleDay.sleepGroups]?.includes(employeeId)) {
      return scheduleDay
    }
    // 他のグループに配置されている場合はエラー
    throw new Error('この職員は既に他のグループに配置されています')
  }

  return {
    ...scheduleDay,
    sleepGroups: {
      ...scheduleDay.sleepGroups,
      [sleepGroup]: [...scheduleDay.sleepGroups[sleepGroup as keyof typeof scheduleDay.sleepGroups], employeeId],
    },
  }
}

/**
 * 職員を仮眠時間グループから削除
 * @param scheduleDay 勤務表の1日のドメインモデル
 * @param employeeId 職員ID
 * @param sleepGroup 仮眠時間グループ
 * @returns 更新後の勤務表の1日のドメインモデル
 */
export function removeEmployeeFromSleepGroup(
  scheduleDay: ScheduleDayDomain,
  employeeId: string,
  sleepGroup: string
): ScheduleDayDomain {
  return {
    ...scheduleDay,
    sleepGroups: {
      ...scheduleDay.sleepGroups,
      [sleepGroup]: scheduleDay.sleepGroups[sleepGroup as keyof typeof scheduleDay.sleepGroups].filter(
        (id) => id !== employeeId
      ),
    },
  }
}

/**
 * 特別休暇を追加
 * @param scheduleDay 勤務表の1日のドメインモデル
 * @param employeeId 職員ID
 * @param type 休暇種別
 * @param startDate 開始日（YYYY-MM-DD形式）
 * @param startTime 開始時刻（HH:mm形式）
 * @param endDate 終了日（YYYY-MM-DD形式）
 * @param endTime 終了時刻（HH:mm形式）
 * @returns 更新後の勤務表の1日のドメインモデル
 */
export function addSpecialLeave(
  scheduleDay: ScheduleDayDomain,
  employeeId: string,
  type: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
): ScheduleDayDomain {
  // 分単位に変換
  const startMinutes = convertToMinutes(startDate, startTime, scheduleDay.date)
  const endMinutes = convertToMinutes(endDate, endTime, scheduleDay.date)

  const newLeave: Omit<SpecialLeaveDomain, 'id'> = {
    employeeId,
    type,
    baseDate: scheduleDay.date,
    startDate,
    startTime,
    startMinutes,
    endDate,
    endTime,
    endMinutes,
  }

  // 重複チェック
  const overlappingLeave = findOverlappingSpecialLeave(newLeave, scheduleDay.specialLeaves, scheduleDay.date)
  if (overlappingLeave) {
    throw new Error('この職員は既に同じ期間に他の休暇が登録されています')
  }

  const leaveWithId: SpecialLeaveDomain = {
    ...newLeave,
    id: Date.now().toString(),
  }

  return {
    ...scheduleDay,
    specialLeaves: [...scheduleDay.specialLeaves, leaveWithId],
  }
}

/**
 * 特別休暇を削除
 * @param scheduleDay 勤務表の1日のドメインモデル
 * @param leaveId 特別休暇ID
 * @returns 更新後の勤務表の1日のドメインモデル
 */
export function removeSpecialLeave(scheduleDay: ScheduleDayDomain, leaveId: string): ScheduleDayDomain {
  return {
    ...scheduleDay,
    specialLeaves: scheduleDay.specialLeaves.filter((leave) => leave.id !== leaveId),
  }
}

/**
 * 勤務表の状態を更新
 * @param date 日付（YYYY-MM-DD形式）
 * @param status 新しい状態
 * @param options 更新オプション
 */
export async function updateScheduleDayStatus(
  date: string,
  status: WorkScheduleStatus,
  options?: UpdateScheduleStatusOptions
): Promise<void> {
  // markCancelledがtrueの場合はhasEverCancelledをtrueに設定
  // それ以外の場合は既存の値を保持するため、undefinedを渡す
  const hasEverCancelled = options?.markCancelled === true ? true : undefined
  await updateScheduleStatus(date, status, hasEverCancelled)
}
