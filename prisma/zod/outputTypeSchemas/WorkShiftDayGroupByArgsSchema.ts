import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayWhereInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereInputSchema'
import { WorkShiftDayOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkShiftDayOrderByWithAggregationInputSchema'
import { WorkShiftDayScalarFieldEnumSchema } from '../inputTypeSchemas/WorkShiftDayScalarFieldEnumSchema'
import { WorkShiftDayScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkShiftDayScalarWhereWithAggregatesInputSchema'

export const WorkShiftDayGroupByArgsSchema: z.ZodType<Prisma.WorkShiftDayGroupByArgs> = z.object({
  where: WorkShiftDayWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftDayOrderByWithAggregationInputSchema.array(), WorkShiftDayOrderByWithAggregationInputSchema ]).optional(),
  by: WorkShiftDayScalarFieldEnumSchema.array(), 
  having: WorkShiftDayScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkShiftDayGroupByArgsSchema;
