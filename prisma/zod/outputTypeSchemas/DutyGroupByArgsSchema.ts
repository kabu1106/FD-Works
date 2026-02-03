import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyWhereInputSchema } from '../inputTypeSchemas/DutyWhereInputSchema'
import { DutyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DutyOrderByWithAggregationInputSchema'
import { DutyScalarFieldEnumSchema } from '../inputTypeSchemas/DutyScalarFieldEnumSchema'
import { DutyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DutyScalarWhereWithAggregatesInputSchema'

export const DutyGroupByArgsSchema: z.ZodType<Prisma.DutyGroupByArgs> = z.object({
  where: DutyWhereInputSchema.optional(), 
  orderBy: z.union([ DutyOrderByWithAggregationInputSchema.array(), DutyOrderByWithAggregationInputSchema ]).optional(),
  by: DutyScalarFieldEnumSchema.array(), 
  having: DutyScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DutyGroupByArgsSchema;
