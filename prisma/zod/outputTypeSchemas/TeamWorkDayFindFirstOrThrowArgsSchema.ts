import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayIncludeSchema } from '../inputTypeSchemas/TeamWorkDayIncludeSchema'
import { TeamWorkDayWhereInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereInputSchema'
import { TeamWorkDayOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeamWorkDayOrderByWithRelationInputSchema'
import { TeamWorkDayWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereUniqueInputSchema'
import { TeamWorkDayScalarFieldEnumSchema } from '../inputTypeSchemas/TeamWorkDayScalarFieldEnumSchema'
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

export const TeamWorkDayFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamWorkDayFindFirstOrThrowArgs> = z.object({
  select: TeamWorkDaySelectSchema.optional(),
  include: z.lazy(() => TeamWorkDayIncludeSchema).optional(),
  where: TeamWorkDayWhereInputSchema.optional(), 
  orderBy: z.union([ TeamWorkDayOrderByWithRelationInputSchema.array(), TeamWorkDayOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWorkDayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamWorkDayScalarFieldEnumSchema, TeamWorkDayScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TeamWorkDayFindFirstOrThrowArgsSchema;
