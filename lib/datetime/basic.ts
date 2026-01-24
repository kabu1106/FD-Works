/**
 * 汎用的な日時処理ユーティリティ
 * 業務ロジックに依存しない基本的な変換処理
 */

/**
 * 時刻文字列（HH:mm）を分に変換
 * @param time 時刻文字列（例: "8:30", "24:00"）
 * @returns 分単位の数値
 */
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/**
 * 分を時刻文字列（HH:mm）に変換
 * @param totalMinutes 分単位の数値
 * @returns 時刻文字列（例: "8:30", "32:30"）
 */
export function minutesToTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

/**
 * 時刻文字列（HH:mm）のバリデーション
 * @param time 時刻文字列
 * @returns 有効な場合true
 */
export function validateTimeFormat(time: string): boolean {
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

/**
 * 日付文字列（YYYY-MM-DD）をDateオブジェクトに変換
 * @param dateString 日付文字列
 * @returns Dateオブジェクト
 */
export function parseDate(dateString: string): Date {
  return new Date(dateString + 'T00:00:00')
}

/**
 * Dateオブジェクトを日付文字列（YYYY-MM-DD）に変換
 * @param date Dateオブジェクト
 * @returns 日付文字列
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
