import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelWhereInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereInputSchema'
import { IncidentReadModelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentReadModelOrderByWithAggregationInputSchema'
import { IncidentReadModelScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentReadModelScalarFieldEnumSchema'
import { IncidentReadModelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentReadModelScalarWhereWithAggregatesInputSchema'

export const IncidentReadModelGroupByArgsSchema: z.ZodType<Prisma.IncidentReadModelGroupByArgs> = z.object({
  where: IncidentReadModelWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentReadModelOrderByWithAggregationInputSchema.array(), IncidentReadModelOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentReadModelScalarFieldEnumSchema.array(), 
  having: IncidentReadModelScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentReadModelGroupByArgsSchema;
