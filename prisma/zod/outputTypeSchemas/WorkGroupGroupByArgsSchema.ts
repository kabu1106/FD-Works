import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupWhereInputSchema } from '../inputTypeSchemas/WorkGroupWhereInputSchema'
import { WorkGroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkGroupOrderByWithAggregationInputSchema'
import { WorkGroupScalarFieldEnumSchema } from '../inputTypeSchemas/WorkGroupScalarFieldEnumSchema'
import { WorkGroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkGroupScalarWhereWithAggregatesInputSchema'

export const WorkGroupGroupByArgsSchema: z.ZodType<Prisma.WorkGroupGroupByArgs> = z.object({
  where: WorkGroupWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupOrderByWithAggregationInputSchema.array(), WorkGroupOrderByWithAggregationInputSchema ]).optional(),
  by: WorkGroupScalarFieldEnumSchema.array(), 
  having: WorkGroupScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkGroupGroupByArgsSchema;
