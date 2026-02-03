import { z } from 'zod';
import { ScheduleStatusSchema } from '../inputTypeSchemas/ScheduleStatusSchema'

/////////////////////////////////////////
// DUTY SCHEMA
/////////////////////////////////////////

export const DutySchema = z.object({
  status: ScheduleStatusSchema,
  id: z.string(),
  date: z.coerce.date(),
  teamId: z.number().int(),
  memo: z.string(),
  /**
   * 承認後ロック（再計算不可）
   */
  isLocked: z.boolean(),
  lockedAt: z.coerce.date().nullable(),
  lockedByUserId: z.string().nullable(),
  /**
   * 過去にキャンセルされたかどうかのフラグ
   */
  hasEverCancelled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Duty = z.infer<typeof DutySchema>

export default DutySchema;
