import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereInputSchema'
import { SpecialLeaveGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupOrderByWithRelationInputSchema'
import { SpecialLeaveGroupWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereUniqueInputSchema'

export const SpecialLeaveGroupAggregateArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupAggregateArgs> = z.object({
  where: SpecialLeaveGroupWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveGroupOrderByWithRelationInputSchema.array(), SpecialLeaveGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: SpecialLeaveGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveGroupAggregateArgsSchema;
