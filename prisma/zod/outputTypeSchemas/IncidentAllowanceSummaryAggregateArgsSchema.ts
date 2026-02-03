import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryWhereInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereInputSchema'
import { IncidentAllowanceSummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryOrderByWithRelationInputSchema'
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereUniqueInputSchema'

export const IncidentAllowanceSummaryAggregateArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryAggregateArgs> = z.object({
  where: IncidentAllowanceSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentAllowanceSummaryOrderByWithRelationInputSchema.array(), IncidentAllowanceSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentAllowanceSummaryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentAllowanceSummaryAggregateArgsSchema;
