import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereInputSchema'
import { OvertimeSlotOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSlotOrderByWithRelationInputSchema'
import { OvertimeSlotWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereUniqueInputSchema'

export const OvertimeSlotAggregateArgsSchema: z.ZodType<Prisma.OvertimeSlotAggregateArgs> = z.object({
  where: OvertimeSlotWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotOrderByWithRelationInputSchema.array(), OvertimeSlotOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSlotWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSlotAggregateArgsSchema;
