import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideIncludeSchema } from '../inputTypeSchemas/TeamWorkOverrideIncludeSchema'
import { TeamWorkOverrideWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereUniqueInputSchema'
import { TeamWorkOverrideCreateInputSchema } from '../inputTypeSchemas/TeamWorkOverrideCreateInputSchema'
import { TeamWorkOverrideUncheckedCreateInputSchema } from '../inputTypeSchemas/TeamWorkOverrideUncheckedCreateInputSchema'
import { TeamWorkOverrideUpdateInputSchema } from '../inputTypeSchemas/TeamWorkOverrideUpdateInputSchema'
import { TeamWorkOverrideUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeamWorkOverrideUncheckedUpdateInputSchema'
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

export const TeamWorkOverrideUpsertArgsSchema: z.ZodType<Prisma.TeamWorkOverrideUpsertArgs> = z.object({
  select: TeamWorkOverrideSelectSchema.optional(),
  include: z.lazy(() => TeamWorkOverrideIncludeSchema).optional(),
  where: TeamWorkOverrideWhereUniqueInputSchema, 
  create: z.union([ TeamWorkOverrideCreateInputSchema, TeamWorkOverrideUncheckedCreateInputSchema ]),
  update: z.union([ TeamWorkOverrideUpdateInputSchema, TeamWorkOverrideUncheckedUpdateInputSchema ]),
}).strict();

export default TeamWorkOverrideUpsertArgsSchema;
