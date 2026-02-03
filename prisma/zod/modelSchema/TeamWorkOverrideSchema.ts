import { z } from 'zod';
import { WorkTypeSchema } from '../inputTypeSchemas/WorkTypeSchema'
import { TeamWorkOverrideReasonSchema } from '../inputTypeSchemas/TeamWorkOverrideReasonSchema'

/////////////////////////////////////////
// TEAM WORK OVERRIDE SCHEMA
/////////////////////////////////////////

export const TeamWorkOverrideSchema = z.object({
  overriddenType: WorkTypeSchema,
  reason: TeamWorkOverrideReasonSchema,
  id: z.string(),
  teamWorkDayId: z.string(),
  memo: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TeamWorkOverride = z.infer<typeof TeamWorkOverrideSchema>

export default TeamWorkOverrideSchema;
