import { z } from 'zod';

// スキーマの定義
export const SpecialLeaveSchema = z.object({
  employeeId: z.string().uuid("不正なID形式です"),
  type: z.enum(['年次休暇', '夏季休暇', '慶弔休暇']),
  startMinutes: z.number().min(0).max(1439), // 0分〜23時59分
  baseDate: z.date(),
});

// スキーマからTypeScriptの型を自動抽出（これが最強の機能！）
export type SpecialLeaveInput = z.infer<typeof SpecialLeaveSchema>;