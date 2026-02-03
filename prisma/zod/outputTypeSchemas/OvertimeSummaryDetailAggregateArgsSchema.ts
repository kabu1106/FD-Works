import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereInputSchema'
import { OvertimeSummaryDetailOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailOrderByWithRelationInputSchema'
import { OvertimeSummaryDetailWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereUniqueInputSchema'

export const OvertimeSummaryDetailAggregateArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailAggregateArgs> = z.object({
  where: OvertimeSummaryDetailWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryDetailOrderByWithRelationInputSchema.array(), OvertimeSummaryDetailOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSummaryDetailWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSummaryDetailAggregateArgsSchema;
