import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereInputSchema'
import { SpecialLeaveTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeOrderByWithRelationInputSchema'
import { SpecialLeaveTypeWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereUniqueInputSchema'

export const SpecialLeaveTypeAggregateArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeAggregateArgs> = z.object({
  where: SpecialLeaveTypeWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveTypeOrderByWithRelationInputSchema.array(), SpecialLeaveTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: SpecialLeaveTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveTypeAggregateArgsSchema;
