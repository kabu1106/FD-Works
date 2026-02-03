import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalWhereInputSchema } from '../inputTypeSchemas/HospitalWhereInputSchema'
import { HospitalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HospitalOrderByWithAggregationInputSchema'
import { HospitalScalarFieldEnumSchema } from '../inputTypeSchemas/HospitalScalarFieldEnumSchema'
import { HospitalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HospitalScalarWhereWithAggregatesInputSchema'

export const HospitalGroupByArgsSchema: z.ZodType<Prisma.HospitalGroupByArgs> = z.object({
  where: HospitalWhereInputSchema.optional(), 
  orderBy: z.union([ HospitalOrderByWithAggregationInputSchema.array(), HospitalOrderByWithAggregationInputSchema ]).optional(),
  by: HospitalScalarFieldEnumSchema.array(), 
  having: HospitalScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HospitalGroupByArgsSchema;
