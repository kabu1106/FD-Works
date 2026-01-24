/**
 * 時間区間の基本構造と操作
 * Django設計思想に基づく純粋関数として実装
 */

/**
 * 時間区間を表現するクラス
 * すべての時刻は分単位（int）で扱う
 */
export class TimeRange {
  start: number
  end: number

  constructor(start: number, end: number) {
    if (start < 0 || end < 0) {
      throw new Error('TimeRangeのstartとendは0以上である必要があります')
    }
    if (start >= end) {
      throw new Error('TimeRangeのstartはendより小さい必要があります')
    }
    this.start = start
    this.end = end
  }

  /**
   * 2つの時間区間が重複しているかチェック
   * @param other 比較対象の時間区間
   * @returns 重複している場合true
   */
  overlaps(other: TimeRange): boolean {
    return this.start < other.end && other.start < this.end
  }

  /**
   * 重複している分数を計算
   * @param other 比較対象の時間区間
   * @returns 重複している分数（分単位）
   */
  overlapMinutes(other: TimeRange): number {
    if (!this.overlaps(other)) {
      return 0
    }
    const overlapStart = Math.max(this.start, other.start)
    const overlapEnd = Math.min(this.end, other.end)
    return Math.max(0, overlapEnd - overlapStart)
  }

  /**
   * 時間区間の長さを取得
   * @returns 分数（分単位）
   */
  get length(): number {
    return this.end - this.start
  }
}

/**
 * 2つの時間区間が重複しているかチェック（関数版）
 * @param start1 区間1の開始時刻（分）
 * @param end1 区間1の終了時刻（分）
 * @param start2 区間2の開始時刻（分）
 * @param end2 区間2の終了時刻（分）
 * @returns 重複している場合true
 */
export function isTimeRangeOverlapping(
  start1: number,
  end1: number,
  start2: number,
  end2: number
): boolean {
  const range1 = new TimeRange(start1, end1)
  const range2 = new TimeRange(start2, end2)
  return range1.overlaps(range2)
}
