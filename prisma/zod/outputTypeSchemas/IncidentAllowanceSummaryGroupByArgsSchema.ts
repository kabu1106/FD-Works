import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryWhereInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereInputSchema'
import { IncidentAllowanceSummaryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryOrderByWithAggregationInputSchema'
import { IncidentAllowanceSummaryScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryScalarFieldEnumSchema'
import { IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema'

export const IncidentAllowanceSummaryGroupByArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryGroupByArgs> = z.object({
  where: IncidentAllowanceSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentAllowanceSummaryOrderByWithAggregationInputSchema.array(), IncidentAllowanceSummaryOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentAllowanceSummaryScalarFieldEnumSchema.array(), 
  having: IncidentAllowanceSummaryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentAllowanceSummaryGroupByArgsSchema;
