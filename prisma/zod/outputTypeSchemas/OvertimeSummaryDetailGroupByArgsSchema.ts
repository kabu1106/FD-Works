import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereInputSchema'
import { OvertimeSummaryDetailOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailOrderByWithAggregationInputSchema'
import { OvertimeSummaryDetailScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSummaryDetailScalarFieldEnumSchema'
import { OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema'

export const OvertimeSummaryDetailGroupByArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailGroupByArgs> = z.object({
  where: OvertimeSummaryDetailWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryDetailOrderByWithAggregationInputSchema.array(), OvertimeSummaryDetailOrderByWithAggregationInputSchema ]).optional(),
  by: OvertimeSummaryDetailScalarFieldEnumSchema.array(), 
  having: OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSummaryDetailGroupByArgsSchema;
