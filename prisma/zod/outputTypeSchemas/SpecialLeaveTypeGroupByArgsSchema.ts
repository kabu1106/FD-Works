import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereInputSchema'
import { SpecialLeaveTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeOrderByWithAggregationInputSchema'
import { SpecialLeaveTypeScalarFieldEnumSchema } from '../inputTypeSchemas/SpecialLeaveTypeScalarFieldEnumSchema'
import { SpecialLeaveTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeScalarWhereWithAggregatesInputSchema'

export const SpecialLeaveTypeGroupByArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeGroupByArgs> = z.object({
  where: SpecialLeaveTypeWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveTypeOrderByWithAggregationInputSchema.array(), SpecialLeaveTypeOrderByWithAggregationInputSchema ]).optional(),
  by: SpecialLeaveTypeScalarFieldEnumSchema.array(), 
  having: SpecialLeaveTypeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveTypeGroupByArgsSchema;
