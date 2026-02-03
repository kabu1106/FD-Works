import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereInputSchema'
import { SpecialLeaveGroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupOrderByWithAggregationInputSchema'
import { SpecialLeaveGroupScalarFieldEnumSchema } from '../inputTypeSchemas/SpecialLeaveGroupScalarFieldEnumSchema'
import { SpecialLeaveGroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupScalarWhereWithAggregatesInputSchema'

export const SpecialLeaveGroupGroupByArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupGroupByArgs> = z.object({
  where: SpecialLeaveGroupWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveGroupOrderByWithAggregationInputSchema.array(), SpecialLeaveGroupOrderByWithAggregationInputSchema ]).optional(),
  by: SpecialLeaveGroupScalarFieldEnumSchema.array(), 
  having: SpecialLeaveGroupScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SpecialLeaveGroupGroupByArgsSchema;
