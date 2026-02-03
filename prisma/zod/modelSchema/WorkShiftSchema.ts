import { z } from 'zod';
import { ShiftTypeSchema } from '../inputTypeSchemas/ShiftTypeSchema'

/////////////////////////////////////////
// WORK SHIFT SCHEMA
/////////////////////////////////////////

export const WorkShiftSchema = z.object({
  shiftType: ShiftTypeSchema,
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
})

export type WorkShift = z.infer<typeof WorkShiftSchema>

export default WorkShiftSchema;
