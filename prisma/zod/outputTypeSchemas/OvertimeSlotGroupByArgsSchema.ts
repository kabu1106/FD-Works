import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereInputSchema'
import { OvertimeSlotOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OvertimeSlotOrderByWithAggregationInputSchema'
import { OvertimeSlotScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSlotScalarFieldEnumSchema'
import { OvertimeSlotScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OvertimeSlotScalarWhereWithAggregatesInputSchema'

export const OvertimeSlotGroupByArgsSchema: z.ZodType<Prisma.OvertimeSlotGroupByArgs> = z.object({
  where: OvertimeSlotWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotOrderByWithAggregationInputSchema.array(), OvertimeSlotOrderByWithAggregationInputSchema ]).optional(),
  by: OvertimeSlotScalarFieldEnumSchema.array(), 
  having: OvertimeSlotScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSlotGroupByArgsSchema;
