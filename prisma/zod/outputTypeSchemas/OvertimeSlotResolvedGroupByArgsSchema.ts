import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereInputSchema'
import { OvertimeSlotResolvedOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedOrderByWithAggregationInputSchema'
import { OvertimeSlotResolvedScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSlotResolvedScalarFieldEnumSchema'
import { OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema'

export const OvertimeSlotResolvedGroupByArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedGroupByArgs> = z.object({
  where: OvertimeSlotResolvedWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotResolvedOrderByWithAggregationInputSchema.array(), OvertimeSlotResolvedOrderByWithAggregationInputSchema ]).optional(),
  by: OvertimeSlotResolvedScalarFieldEnumSchema.array(), 
  having: OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSlotResolvedGroupByArgsSchema;
