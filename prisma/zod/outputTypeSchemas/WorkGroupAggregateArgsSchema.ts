import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupWhereInputSchema } from '../inputTypeSchemas/WorkGroupWhereInputSchema'
import { WorkGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkGroupOrderByWithRelationInputSchema'
import { WorkGroupWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupWhereUniqueInputSchema'

export const WorkGroupAggregateArgsSchema: z.ZodType<Prisma.WorkGroupAggregateArgs> = z.object({
  where: WorkGroupWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupOrderByWithRelationInputSchema.array(), WorkGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkGroupAggregateArgsSchema;
