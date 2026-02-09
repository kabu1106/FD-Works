// domain/projections/special-leave-validator.ts

import { InvariantViolationError } from './schedule-validator';
import { ScheduleDaySpecialLeaveUI } from '@/types/schedule-day';

// 時間文字列 "HH:mm" を 数値（分）に変換するヘルパー
// "08:30" -> 510, "32:30" -> 1950
const timeToMinutes = (timeStr: string): number => {
  const [hh, mm] = timeStr.split(':').map(Number);
  return hh * 60 + mm;
};

const DAY_MIN_MINUTES = timeToMinutes("08:30"); // 510
const DAY_MAX_MINUTES = timeToMinutes("32:30"); // 1950

/**
 * 特別休暇のバリデーション (UI型準拠)
 */
export const validateSpecialLeave = (
  newLeave: ScheduleDaySpecialLeaveUI,
  existingLeaves: ScheduleDaySpecialLeaveUI[]
): void => {
  const start = timeToMinutes(newLeave.startTime);
  const end = timeToMinutes(newLeave.endTime);

  // 1. 基本的な時間の前後関係
  if (start >= end) {
    throw new InvariantViolationError("開始時間は終了時間より前である必要があります。");
  }

  // 2. 業務時間範囲内 (08:30 ～ 32:30)
  if (start < DAY_MIN_MINUTES || end > DAY_MAX_MINUTES) {
    throw new InvariantViolationError(
      `時間は 08:30 から 32:30 の範囲内で入力してください。`
    );
  }

  // 3. 同一職員の時間重複チェック
  const staffLeaves = existingLeaves.filter(l => l.staffId === newLeave.staffId);
  for (const leave of staffLeaves) {
    const existingStart = timeToMinutes(leave.startTime);
    const existingEnd = timeToMinutes(leave.endTime);

    // 重複条件: (StartA < EndB) AND (EndA > StartB)
    if (start < existingEnd && end > existingStart) {
      throw new InvariantViolationError(
        `${newLeave.staffName} さんは既に ${leave.startTime}～${leave.endTime} に休暇が登録されています。`
      );
    }
  }
};