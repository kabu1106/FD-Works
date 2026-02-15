import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereInputSchema'
import { OvertimeSlotResolvedOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedOrderByWithRelationInputSchema'
import { OvertimeSlotResolvedWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereUniqueInputSchema'

export const OvertimeSlotResolvedAggregateArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedAggregateArgs> = z.object({
  where: OvertimeSlotResolvedWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotResolvedOrderByWithRelationInputSchema.array(), OvertimeSlotResolvedOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSlotResolvedWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSlotResolvedAggregateArgsSchema;
