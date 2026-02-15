import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeWhereInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereInputSchema'
import { DutyDayTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DutyDayTypeOrderByWithAggregationInputSchema'
import { DutyDayTypeScalarFieldEnumSchema } from '../inputTypeSchemas/DutyDayTypeScalarFieldEnumSchema'
import { DutyDayTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DutyDayTypeScalarWhereWithAggregatesInputSchema'

export const DutyDayTypeGroupByArgsSchema: z.ZodType<Prisma.DutyDayTypeGroupByArgs> = z.object({
  where: DutyDayTypeWhereInputSchema.optional(), 
  orderBy: z.union([ DutyDayTypeOrderByWithAggregationInputSchema.array(), DutyDayTypeOrderByWithAggregationInputSchema ]).optional(),
  by: DutyDayTypeScalarFieldEnumSchema.array(), 
  having: DutyDayTypeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DutyDayTypeGroupByArgsSchema;
