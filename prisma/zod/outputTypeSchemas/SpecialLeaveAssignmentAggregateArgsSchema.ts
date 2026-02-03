import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereInputSchema'
import { SpecialLeaveAssignmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentOrderByWithRelationInputSchema'
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereUniqueInputSchema'

export const SpecialLeaveAssignmentAggregateArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentAggregateArgs> = z.object({
  where: SpecialLeaveAssignmentWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveAssignmentOrderByWithRelationInputSchema.array(), SpecialLeaveAssignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: SpecialLeaveAssignmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveAssignmentAggregateArgsSchema;
