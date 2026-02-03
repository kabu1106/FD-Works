import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeWhereInputSchema } from '../inputTypeSchemas/AllowanceTypeWhereInputSchema'
import { AllowanceTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AllowanceTypeOrderByWithAggregationInputSchema'
import { AllowanceTypeScalarFieldEnumSchema } from '../inputTypeSchemas/AllowanceTypeScalarFieldEnumSchema'
import { AllowanceTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AllowanceTypeScalarWhereWithAggregatesInputSchema'

export const AllowanceTypeGroupByArgsSchema: z.ZodType<Prisma.AllowanceTypeGroupByArgs> = z.object({
  where: AllowanceTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AllowanceTypeOrderByWithAggregationInputSchema.array(), AllowanceTypeOrderByWithAggregationInputSchema ]).optional(),
  by: AllowanceTypeScalarFieldEnumSchema.array(), 
  having: AllowanceTypeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AllowanceTypeGroupByArgsSchema;
