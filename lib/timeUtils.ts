/**
 * 時間変換ユーティリティ
 * 24:00表記（表示用）と48:00形式（データベース用）の変換
 */

// 24:00表記の時刻を分に変換（24時間を超える場合はそのまま）
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// 分を24:00表記の時刻文字列に変換
export function minutesToTime24Format(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

// 24:00表記の時刻を48:00形式の時刻文字列に変換（データベース登録用）
// 24時間を超える場合もそのまま返す（例: 32:30 → 32:30）
export function convertTo48HourFormat(time24: string): string {
  // 24:00表記は既に48:00形式と同じ（24時間を超える場合はそのまま）
  return time24
}


// 48:00形式の時刻を24:00表記に変換（表示用）
// 48:00形式は24:00表記と同じなので、そのまま返す
export function convertTo24HourFormat(time48: string): string {
  return time48
}

// 時刻文字列（HH:mm）をバリデーション（24:00形式のみ、25:00はNG）
export function validateTimeFormat(time: string): boolean {
  // 24:00形式のみ（00:00〜24:00）
  const timeRegex = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])$/
  if (!timeRegex.test(time)) {
    return false
  }
  const [hours, minutes] = time.split(':').map(Number)
  // 24:00まで有効（25:00はNG）
  if (hours > 24 || (hours === 24 && minutes > 0)) {
    return false
  }
  return true
}

// 選択された日付を基準に、8:30～翌日8:30までの範囲内かチェック
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

// 開始日時と終了日時の範囲チェック（選択された日付を基準に）
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

// 時間区間の基本構造（Django設計思想に基づく）
export class TimeRange {
  start: number
  end: number

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  // 2つの時間区間が重複しているかチェック
  overlaps(other: TimeRange): boolean {
    // 期間1: [this.start, this.end]
    // 期間2: [other.start, other.end]
    // 重複している場合: this.start <= other.end && other.start <= this.end
    return this.start < other.end && other.start < this.end
  }

  // 重複している分数を計算
  overlapMinutes(other: TimeRange): number {
    if (!this.overlaps(other)) {
      return 0
    }
    const overlapStart = Math.max(this.start, other.start)
    const overlapEnd = Math.min(this.end, other.end)
    return Math.max(0, overlapEnd - overlapStart)
  }
}

// 入力された日付と時刻を分単位に変換
// 仕様: ("入力された日付" - "選択された日付") * 24 * 60 + hh * 60 + mm
export function convertToMinutes(
  inputDate: string,
  inputTime: string,
  baseDate: string
): number {
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

// 2つの期間が重複しているかチェック（分単位で比較）
// 後方互換性のため残す（TimeRangeクラスを使用することを推奨）
export function isTimeRangeOverlapping(
  startMinutes1: number,
  endMinutes1: number,
  startMinutes2: number,
  endMinutes2: number
): boolean {
  const range1 = new TimeRange(startMinutes1, endMinutes1)
  const range2 = new TimeRange(startMinutes2, endMinutes2)
  return range1.overlaps(range2)
}