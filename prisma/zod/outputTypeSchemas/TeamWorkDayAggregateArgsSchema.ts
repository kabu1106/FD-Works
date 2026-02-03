import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayWhereInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereInputSchema'
import { TeamWorkDayOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeamWorkDayOrderByWithRelationInputSchema'
import { TeamWorkDayWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereUniqueInputSchema'

export const TeamWorkDayAggregateArgsSchema: z.ZodType<Prisma.TeamWorkDayAggregateArgs> = z.object({
  where: TeamWorkDayWhereInputSchema.optional(), 
  orderBy: z.union([ TeamWorkDayOrderByWithRelationInputSchema.array(), TeamWorkDayOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWorkDayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TeamWorkDayAggregateArgsSchema;
