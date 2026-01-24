'use server'

/**
 * Server Actions
 * クライアントコンポーネントから呼び出されるサーバー側のアクション
 */

import { getOrCreateScheduleDay, saveSchedule, updateScheduleDayStatus } from '@/lib/schedule/service'
import { addEmployeeToSleepGroup, removeEmployeeFromSleepGroup, addSpecialLeave, removeSpecialLeave } from '@/lib/schedule/service'
import { WorkScheduleStatus } from '@/types'
import { domainToUI } from '@/lib/schedule/adapter'
import { revalidatePath } from 'next/cache'

/**
 * 勤務表の1日を取得
 */
export async function getScheduleDayAction(date: string) {
  const scheduleDay = await getOrCreateScheduleDay(date)
  return domainToUI(scheduleDay)
}

/**
 * 職員を仮眠時間グループに追加
 */
export async function addEmployeeToGroupAction(
  date: string,
  employeeId: string,
  sleepGroup: string
) {
  const scheduleDay = await getOrCreateScheduleDay(date)
  const updated = addEmployeeToSleepGroup(scheduleDay, employeeId, sleepGroup)
  await saveSchedule(updated)
  revalidatePath(`/schedule`)
}

/**
 * 職員を仮眠時間グループから削除
 */
export async function removeEmployeeFromGroupAction(
  date: string,
  employeeId: string,
  sleepGroup: string
) {
  const scheduleDay = await getOrCreateScheduleDay(date)
  const updated = removeEmployeeFromSleepGroup(scheduleDay, employeeId, sleepGroup)
  await saveSchedule(updated)
  revalidatePath(`/schedule`)
}

/**
 * 特別休暇を追加
 */
export async function addSpecialLeaveAction(
  date: string,
  employeeId: string,
  type: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
) {
  const scheduleDay = await getOrCreateScheduleDay(date)
  const updated = addSpecialLeave(scheduleDay, employeeId, type, startDate, startTime, endDate, endTime)
  await saveSchedule(updated)
  revalidatePath(`/schedule`)
}

/**
 * 特別休暇を削除
 */
export async function removeSpecialLeaveAction(date: string, leaveId: string) {
  const scheduleDay = await getOrCreateScheduleDay(date)
  const updated = removeSpecialLeave(scheduleDay, leaveId)
  await saveSchedule(updated)
  revalidatePath(`/schedule`)
}

/**
 * 勤務表の状態を更新
 */
export async function updateScheduleStatusAction(
  date: string,
  status: WorkScheduleStatus,
  options?: { markCancelled?: boolean }
) {
  await updateScheduleDayStatus(date, status, options)
  revalidatePath(`/schedule`)
}
