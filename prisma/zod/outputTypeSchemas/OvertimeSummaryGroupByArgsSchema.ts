import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereInputSchema'
import { OvertimeSummaryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OvertimeSummaryOrderByWithAggregationInputSchema'
import { OvertimeSummaryScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSummaryScalarFieldEnumSchema'
import { OvertimeSummaryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OvertimeSummaryScalarWhereWithAggregatesInputSchema'

export const OvertimeSummaryGroupByArgsSchema: z.ZodType<Prisma.OvertimeSummaryGroupByArgs> = z.object({
  where: OvertimeSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryOrderByWithAggregationInputSchema.array(), OvertimeSummaryOrderByWithAggregationInputSchema ]).optional(),
  by: OvertimeSummaryScalarFieldEnumSchema.array(), 
  having: OvertimeSummaryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeSummaryGroupByArgsSchema;
