import { z } from 'zod';
import { WorkTypeSchema } from '../inputTypeSchemas/WorkTypeSchema'

/////////////////////////////////////////
// TEAM WORK DAY SCHEMA
/////////////////////////////////////////

export const TeamWorkDaySchema = z.object({
  type: WorkTypeSchema,
  id: z.string(),
  date: z.coerce.date(),
  teamId: z.number().int(),
})

export type TeamWorkDay = z.infer<typeof TeamWorkDaySchema>

export default TeamWorkDaySchema;
