import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideWhereInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereInputSchema'
import { TeamWorkOverrideOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TeamWorkOverrideOrderByWithAggregationInputSchema'
import { TeamWorkOverrideScalarFieldEnumSchema } from '../inputTypeSchemas/TeamWorkOverrideScalarFieldEnumSchema'
import { TeamWorkOverrideScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TeamWorkOverrideScalarWhereWithAggregatesInputSchema'

export const TeamWorkOverrideGroupByArgsSchema: z.ZodType<Prisma.TeamWorkOverrideGroupByArgs> = z.object({
  where: TeamWorkOverrideWhereInputSchema.optional(), 
  orderBy: z.union([ TeamWorkOverrideOrderByWithAggregationInputSchema.array(), TeamWorkOverrideOrderByWithAggregationInputSchema ]).optional(),
  by: TeamWorkOverrideScalarFieldEnumSchema.array(), 
  having: TeamWorkOverrideScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TeamWorkOverrideGroupByArgsSchema;
