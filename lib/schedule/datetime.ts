/**
 * 勤務表ドメイン専用の日時処理
 * 業務ロジックに特化した変換処理
 */

import { validateTimeFormat } from '@/lib/datetime/basic'

/**
 * 入力された日付と時刻を分単位に変換
 * 仕様: ("入力された日付" - "選択された日付") * 24 * 60 + hh * 60 + mm
 * @param inputDate 入力された日付（YYYY-MM-DD形式）
 * @param inputTime 入力された時刻（HH:mm形式）
 * @param baseDate 基準日（YYYY-MM-DD形式）
 * @returns 分単位の数値
 */
export function convertToMinutes(
  inputDate: string,
  inputTime: string,
  baseDate: string
): number {
  if (!validateTimeFormat(inputTime)) {
    throw new Error(`無効な時刻形式: ${inputTime}`)
  }

  // 日付の差を計算（日数）
  const baseDateObj = new Date(baseDate + 'T00:00:00')
  const inputDateObj = new Date(inputDate + 'T00:00:00')
  const dateDiffMs = inputDateObj.getTime() - baseDateObj.getTime()
  const dateDiffDays = Math.floor(dateDiffMs / (1000 * 60 * 60 * 24))

  // 時刻を分に変換
  const [hours, minutes] = inputTime.split(':').map(Number)
  const timeMinutes = hours * 60 + minutes

  // ("入力された日付" - "選択された日付") * 24 * 60 + hh * 60 + mm
  return dateDiffDays * 24 * 60 + timeMinutes
}

/**
 * 選択された日付を基準に、8:30～翌日8:30までの範囲内かチェック
 * @param inputDate 入力された日付（YYYY-MM-DD形式）
 * @param inputTime 入力された時刻（HH:mm形式）
 * @param baseDate 基準日（YYYY-MM-DD形式）
 * @returns 範囲内の場合true
 */
export function isWithinWorkHoursRange(
  inputDate: string,
  inputTime: string,
  baseDate: string
): boolean {
  if (!validateTimeFormat(inputTime)) {
    return false
  }

  // 日付を比較（YYYY-MM-DD形式）
  const baseDateObj = new Date(baseDate + 'T00:00:00')
  const nextDateObj = new Date(baseDateObj)
  nextDateObj.setDate(nextDateObj.getDate() + 1)

  const inputDateObj = new Date(inputDate + 'T00:00:00')

  // 入力日付が選択日またはその翌日でない場合はNG
  if (inputDateObj < baseDateObj || inputDateObj > nextDateObj) {
    return false
  }

  // 時刻を分に変換
  const [hours, minutes] = inputTime.split(':').map(Number)
  const inputTimeMinutes = hours * 60 + minutes

  // 選択日の8:30を分に変換
  const baseStartMinutes = 8 * 60 + 30 // 8:30 = 510分
  // 翌日8:30を分に変換
  const baseEndMinutes = (24 + 8) * 60 + 30 // 翌日8:30 = 1920分

  if (inputDate === baseDate) {
    // 選択日の場合は8:30以降
    return inputTimeMinutes >= baseStartMinutes && inputTimeMinutes <= 24 * 60 // 24:00まで
  } else {
    // 翌日の場合は8:30まで
    return inputTimeMinutes >= 0 && inputTimeMinutes <= baseStartMinutes // 0:00～8:30
  }
}

/**
 * 開始日時と終了日時の範囲チェック（選択された日付を基準に）
 * @param startDate 開始日（YYYY-MM-DD形式）
 * @param startTime 開始時刻（HH:mm形式）
 * @param endDate 終了日（YYYY-MM-DD形式）
 * @param endTime 終了時刻（HH:mm形式）
 * @param baseDate 基準日（YYYY-MM-DD形式）
 * @returns バリデーション結果
 */
export function validateDateTimeRange(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  baseDate: string
): { valid: boolean; error?: string } {
  // 時刻形式チェック（24:00形式のみ）
  if (!validateTimeFormat(startTime)) {
    return { valid: false, error: '開始時刻は24:00形式で入力してください（例: 8:30, 24:00）。25:00は使用できません。' }
  }
  if (!validateTimeFormat(endTime)) {
    return { valid: false, error: '終了時刻は24:00形式で入力してください（例: 17:00, 24:00）。25:00は使用できません。' }
  }

  // 選択された日付を基準に、8:30～翌日8:30までの範囲内かチェック
  if (!isWithinWorkHoursRange(startDate, startTime, baseDate)) {
    return { valid: false, error: '開始日時は選択された日付の8:30～翌日8:30の範囲内である必要があります' }
  }
  if (!isWithinWorkHoursRange(endDate, endTime, baseDate)) {
    return { valid: false, error: '終了日時は選択された日付の8:30～翌日8:30の範囲内である必要があります' }
  }

  // 終了日時が開始日時より後であることを確認（分単位で比較）
  const baseDateObj = new Date(baseDate + 'T00:00:00')
  const startDateObj = new Date(startDate + 'T00:00:00')
  const endDateObj = new Date(endDate + 'T00:00:00')

  const [startHours, startMinutes] = startTime.split(':').map(Number)
  const [endHours, endMinutes] = endTime.split(':').map(Number)

  // 選択日の0:00を基準にした分単位で比較
  const startDateDiffDays = Math.floor((startDateObj.getTime() - baseDateObj.getTime()) / (1000 * 60 * 60 * 24))
  const endDateDiffDays = Math.floor((endDateObj.getTime() - baseDateObj.getTime()) / (1000 * 60 * 60 * 24))

  const startTotalMinutes = startDateDiffDays * 24 * 60 + startHours * 60 + startMinutes
  const endTotalMinutes = endDateDiffDays * 24 * 60 + endHours * 60 + endMinutes

  if (endTotalMinutes <= startTotalMinutes) {
    return { valid: false, error: '終了日時は開始日時より後である必要があります' }
  }

  return { valid: true }
}
