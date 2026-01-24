/**
 * 勤務表の計算ロジック
 * 純粋関数として実装（副作用なし）
 */

import { TimeRange } from '@/lib/datetime/range'
import { SpecialLeaveDomain } from './types'
import { convertToMinutes } from '@/lib/schedule/datetime'

/**
 * 特別休暇の時間区間が重複しているかチェック
 * @param leave1 特別休暇1
 * @param leave2 特別休暇2
 * @param baseDate 基準日（YYYY-MM-DD形式）
 * @returns 重複している場合true
 */
export function isSpecialLeaveOverlapping(
  leave1: SpecialLeaveDomain,
  leave2: SpecialLeaveDomain,
  baseDate: string
): boolean {
  // 異なる職員の場合は重複しない
  if (leave1.employeeId !== leave2.employeeId) {
    return false
  }

  // 同じ特別休暇の場合は重複しない
  if (leave1.id === leave2.id) {
    return false
  }

  // baseDateを基準に分単位に変換
  const start1 = convertToMinutes(leave1.startDate, leave1.startTime, baseDate)
  const end1 = convertToMinutes(leave1.endDate, leave1.endTime, baseDate)
  const start2 = convertToMinutes(leave2.startDate, leave2.startTime, baseDate)
  const end2 = convertToMinutes(leave2.endDate, leave2.endTime, baseDate)

  const range1 = new TimeRange(start1, end1)
  const range2 = new TimeRange(start2, end2)

  return range1.overlaps(range2)
}

/**
 * 新しい特別休暇が既存の特別休暇と重複していないかチェック
 * @param newLeave 新しい特別休暇
 * @param existingLeaves 既存の特別休暇の配列
 * @param baseDate 基準日（YYYY-MM-DD形式）
 * @returns 重複している既存の特別休暇があればそのオブジェクト、なければnull
 */
export function findOverlappingSpecialLeave(
  newLeave: Omit<SpecialLeaveDomain, 'id'>,
  existingLeaves: SpecialLeaveDomain[],
  baseDate: string
): SpecialLeaveDomain | null {
  for (const existingLeave of existingLeaves) {
    if (isSpecialLeaveOverlapping(
      { ...newLeave, id: '' },
      existingLeave,
      baseDate
    )) {
      return existingLeave
    }
  }
  return null
}
