import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayIncludeSchema } from '../inputTypeSchemas/TeamWorkDayIncludeSchema'
import { TeamWorkDayCreateInputSchema } from '../inputTypeSchemas/TeamWorkDayCreateInputSchema'
import { TeamWorkDayUncheckedCreateInputSchema } from '../inputTypeSchemas/TeamWorkDayUncheckedCreateInputSchema'
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { TeamWorkOverrideFindManyArgsSchema } from "../outputTypeSchemas/TeamWorkOverrideFindManyArgsSchema"
import { TeamWorkDayCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamWorkDayCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamWorkDaySelectSchema: z.ZodType<Prisma.TeamWorkDaySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  overrides: z.union([z.boolean(),z.lazy(() => TeamWorkOverrideFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamWorkDayCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamWorkDayCreateArgsSchema: z.ZodType<Prisma.TeamWorkDayCreateArgs> = z.object({
  select: TeamWorkDaySelectSchema.optional(),
  include: z.lazy(() => TeamWorkDayIncludeSchema).optional(),
  data: z.union([ TeamWorkDayCreateInputSchema, TeamWorkDayUncheckedCreateInputSchema ]),
}).strict();

export default TeamWorkDayCreateArgsSchema;
