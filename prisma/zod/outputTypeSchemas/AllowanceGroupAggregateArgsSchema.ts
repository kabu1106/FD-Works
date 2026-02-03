import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupWhereInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereInputSchema'
import { AllowanceGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/AllowanceGroupOrderByWithRelationInputSchema'
import { AllowanceGroupWhereUniqueInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereUniqueInputSchema'

export const AllowanceGroupAggregateArgsSchema: z.ZodType<Prisma.AllowanceGroupAggregateArgs> = z.object({
  where: AllowanceGroupWhereInputSchema.optional(), 
  orderBy: z.union([ AllowanceGroupOrderByWithRelationInputSchema.array(), AllowanceGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: AllowanceGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AllowanceGroupAggregateArgsSchema;
