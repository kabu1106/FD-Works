import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereInputSchema'
import { SpecialLeaveAssignmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentOrderByWithAggregationInputSchema'
import { SpecialLeaveAssignmentScalarFieldEnumSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentScalarFieldEnumSchema'
import { SpecialLeaveAssignmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentScalarWhereWithAggregatesInputSchema'

export const SpecialLeaveAssignmentGroupByArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentGroupByArgs> = z.object({
  where: SpecialLeaveAssignmentWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveAssignmentOrderByWithAggregationInputSchema.array(), SpecialLeaveAssignmentOrderByWithAggregationInputSchema ]).optional(),
  by: SpecialLeaveAssignmentScalarFieldEnumSchema.array(), 
  having: SpecialLeaveAssignmentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveAssignmentGroupByArgsSchema;
