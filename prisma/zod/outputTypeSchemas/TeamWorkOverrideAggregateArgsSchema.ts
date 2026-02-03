import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideWhereInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereInputSchema'
import { TeamWorkOverrideOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeamWorkOverrideOrderByWithRelationInputSchema'
import { TeamWorkOverrideWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereUniqueInputSchema'

export const TeamWorkOverrideAggregateArgsSchema: z.ZodType<Prisma.TeamWorkOverrideAggregateArgs> = z.object({
  where: TeamWorkOverrideWhereInputSchema.optional(), 
  orderBy: z.union([ TeamWorkOverrideOrderByWithRelationInputSchema.array(), TeamWorkOverrideOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWorkOverrideWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TeamWorkOverrideAggregateArgsSchema;
