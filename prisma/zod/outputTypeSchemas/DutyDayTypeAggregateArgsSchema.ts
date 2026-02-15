import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeWhereInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereInputSchema'
import { DutyDayTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/DutyDayTypeOrderByWithRelationInputSchema'
import { DutyDayTypeWhereUniqueInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereUniqueInputSchema'

export const DutyDayTypeAggregateArgsSchema: z.ZodType<Prisma.DutyDayTypeAggregateArgs> = z.object({
  where: DutyDayTypeWhereInputSchema.optional(), 
  orderBy: z.union([ DutyDayTypeOrderByWithRelationInputSchema.array(), DutyDayTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: DutyDayTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DutyDayTypeAggregateArgsSchema;
