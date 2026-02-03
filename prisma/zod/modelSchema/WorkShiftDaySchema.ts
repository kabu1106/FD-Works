import { z } from 'zod';
import { WorkTypeSchema } from '../inputTypeSchemas/WorkTypeSchema'

/////////////////////////////////////////
// WORK SHIFT DAY SCHEMA
/////////////////////////////////////////

export const WorkShiftDaySchema = z.object({
  type: WorkTypeSchema,
  id: z.string(),
  date: z.coerce.date(),
  workShiftId: z.number().int(),
})

export type WorkShiftDay = z.infer<typeof WorkShiftDaySchema>

export default WorkShiftDaySchema;
