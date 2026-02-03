import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayIncludeSchema } from '../inputTypeSchemas/TeamWorkDayIncludeSchema'
import { TeamWorkDayUpdateInputSchema } from '../inputTypeSchemas/TeamWorkDayUpdateInputSchema'
import { TeamWorkDayUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeamWorkDayUncheckedUpdateInputSchema'
import { TeamWorkDayWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereUniqueInputSchema'
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

export const TeamWorkDayUpdateArgsSchema: z.ZodType<Prisma.TeamWorkDayUpdateArgs> = z.object({
  select: TeamWorkDaySelectSchema.optional(),
  include: z.lazy(() => TeamWorkDayIncludeSchema).optional(),
  data: z.union([ TeamWorkDayUpdateInputSchema, TeamWorkDayUncheckedUpdateInputSchema ]),
  where: TeamWorkDayWhereUniqueInputSchema, 
}).strict();

export default TeamWorkDayUpdateArgsSchema;
