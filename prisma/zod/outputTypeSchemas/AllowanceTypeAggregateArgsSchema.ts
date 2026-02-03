import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceTypeWhereInputSchema } from '../inputTypeSchemas/AllowanceTypeWhereInputSchema'
import { AllowanceTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/AllowanceTypeOrderByWithRelationInputSchema'
import { AllowanceTypeWhereUniqueInputSchema } from '../inputTypeSchemas/AllowanceTypeWhereUniqueInputSchema'

export const AllowanceTypeAggregateArgsSchema: z.ZodType<Prisma.AllowanceTypeAggregateArgs> = z.object({
  where: AllowanceTypeWhereInputSchema.optional(), 
  orderBy: z.union([ AllowanceTypeOrderByWithRelationInputSchema.array(), AllowanceTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: AllowanceTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AllowanceTypeAggregateArgsSchema;
