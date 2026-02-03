import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentWhereInputSchema } from '../inputTypeSchemas/IncidentWhereInputSchema'
import { IncidentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentOrderByWithAggregationInputSchema'
import { IncidentScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentScalarFieldEnumSchema'
import { IncidentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentScalarWhereWithAggregatesInputSchema'

export const IncidentGroupByArgsSchema: z.ZodType<Prisma.IncidentGroupByArgs> = z.object({
  where: IncidentWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentOrderByWithAggregationInputSchema.array(), IncidentOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentScalarFieldEnumSchema.array(), 
  having: IncidentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentGroupByArgsSchema;
