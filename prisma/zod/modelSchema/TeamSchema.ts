import { z } from 'zod';
import { ShiftTypeSchema } from '../inputTypeSchemas/ShiftTypeSchema'

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  shiftType: ShiftTypeSchema,
  id: z.number().int(),
  departmentId: z.number().int(),
  workShiftId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
})

export type Team = z.infer<typeof TeamSchema>

export default TeamSchema;
