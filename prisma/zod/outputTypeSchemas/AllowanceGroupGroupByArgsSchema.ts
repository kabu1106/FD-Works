import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupWhereInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereInputSchema'
import { AllowanceGroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AllowanceGroupOrderByWithAggregationInputSchema'
import { AllowanceGroupScalarFieldEnumSchema } from '../inputTypeSchemas/AllowanceGroupScalarFieldEnumSchema'
import { AllowanceGroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AllowanceGroupScalarWhereWithAggregatesInputSchema'

export const AllowanceGroupGroupByArgsSchema: z.ZodType<Prisma.AllowanceGroupGroupByArgs> = z.object({
  where: AllowanceGroupWhereInputSchema.optional(), 
  orderBy: z.union([ AllowanceGroupOrderByWithAggregationInputSchema.array(), AllowanceGroupOrderByWithAggregationInputSchema ]).optional(),
  by: AllowanceGroupScalarFieldEnumSchema.array(), 
  having: AllowanceGroupScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AllowanceGroupGroupByArgsSchema;
