import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftWhereInputSchema } from '../inputTypeSchemas/WorkShiftWhereInputSchema'
import { WorkShiftOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkShiftOrderByWithRelationInputSchema'
import { WorkShiftWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftWhereUniqueInputSchema'

export const WorkShiftAggregateArgsSchema: z.ZodType<Prisma.WorkShiftAggregateArgs> = z.object({
  where: WorkShiftWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftOrderByWithRelationInputSchema.array(), WorkShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkShiftAggregateArgsSchema;
