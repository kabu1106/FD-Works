import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereInputSchema'
import { OvertimeSummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSummaryOrderByWithRelationInputSchema'
import { OvertimeSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereUniqueInputSchema'

export const OvertimeSummaryAggregateArgsSchema: z.ZodType<Prisma.OvertimeSummaryAggregateArgs> = z.object({
  where: OvertimeSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryOrderByWithRelationInputSchema.array(), OvertimeSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSummaryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSummaryAggregateArgsSchema;
