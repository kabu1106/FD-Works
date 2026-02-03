import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideIncludeSchema } from '../inputTypeSchemas/TeamWorkOverrideIncludeSchema'
import { TeamWorkOverrideWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereUniqueInputSchema'
import { TeamWorkDayArgsSchema } from "../outputTypeSchemas/TeamWorkDayArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamWorkOverrideSelectSchema: z.ZodType<Prisma.TeamWorkOverrideSelect> = z.object({
  id: z.boolean().optional(),
  teamWorkDayId: z.boolean().optional(),
  overriddenType: z.boolean().optional(),
  reason: z.boolean().optional(),
  memo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  teamWorkDay: z.union([z.boolean(),z.lazy(() => TeamWorkDayArgsSchema)]).optional(),
}).strict()

export const TeamWorkOverrideFindUniqueArgsSchema: z.ZodType<Prisma.TeamWorkOverrideFindUniqueArgs> = z.object({
  select: TeamWorkOverrideSelectSchema.optional(),
  include: z.lazy(() => TeamWorkOverrideIncludeSchema).optional(),
  where: TeamWorkOverrideWhereUniqueInputSchema, 
}).strict();

export default TeamWorkOverrideFindUniqueArgsSchema;
