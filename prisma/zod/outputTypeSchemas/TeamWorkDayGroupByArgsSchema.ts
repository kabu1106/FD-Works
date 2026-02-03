import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayWhereInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereInputSchema'
import { TeamWorkDayOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TeamWorkDayOrderByWithAggregationInputSchema'
import { TeamWorkDayScalarFieldEnumSchema } from '../inputTypeSchemas/TeamWorkDayScalarFieldEnumSchema'
import { TeamWorkDayScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TeamWorkDayScalarWhereWithAggregatesInputSchema'

export const TeamWorkDayGroupByArgsSchema: z.ZodType<Prisma.TeamWorkDayGroupByArgs> = z.object({
  where: TeamWorkDayWhereInputSchema.optional(), 
  orderBy: z.union([ TeamWorkDayOrderByWithAggregationInputSchema.array(), TeamWorkDayOrderByWithAggregationInputSchema ]).optional(),
  by: TeamWorkDayScalarFieldEnumSchema.array(), 
  having: TeamWorkDayScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TeamWorkDayGroupByArgsSchema;
