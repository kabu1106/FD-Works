import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayWhereInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereInputSchema'
import { WorkShiftDayOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkShiftDayOrderByWithRelationInputSchema'
import { WorkShiftDayWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereUniqueInputSchema'

export const WorkShiftDayAggregateArgsSchema: z.ZodType<Prisma.WorkShiftDayAggregateArgs> = z.object({
  where: WorkShiftDayWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftDayOrderByWithRelationInputSchema.array(), WorkShiftDayOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkShiftDayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkShiftDayAggregateArgsSchema;
