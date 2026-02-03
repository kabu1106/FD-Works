import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftWhereInputSchema } from '../inputTypeSchemas/WorkShiftWhereInputSchema'
import { WorkShiftOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkShiftOrderByWithAggregationInputSchema'
import { WorkShiftScalarFieldEnumSchema } from '../inputTypeSchemas/WorkShiftScalarFieldEnumSchema'
import { WorkShiftScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkShiftScalarWhereWithAggregatesInputSchema'

export const WorkShiftGroupByArgsSchema: z.ZodType<Prisma.WorkShiftGroupByArgs> = z.object({
  where: WorkShiftWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftOrderByWithAggregationInputSchema.array(), WorkShiftOrderByWithAggregationInputSchema ]).optional(),
  by: WorkShiftScalarFieldEnumSchema.array(), 
  having: WorkShiftScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkShiftGroupByArgsSchema;
