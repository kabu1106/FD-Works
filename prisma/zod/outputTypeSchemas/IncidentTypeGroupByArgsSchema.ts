import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeWhereInputSchema } from '../inputTypeSchemas/IncidentTypeWhereInputSchema'
import { IncidentTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentTypeOrderByWithAggregationInputSchema'
import { IncidentTypeScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentTypeScalarFieldEnumSchema'
import { IncidentTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentTypeScalarWhereWithAggregatesInputSchema'

export const IncidentTypeGroupByArgsSchema: z.ZodType<Prisma.IncidentTypeGroupByArgs> = z.object({
  where: IncidentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentTypeOrderByWithAggregationInputSchema.array(), IncidentTypeOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentTypeScalarFieldEnumSchema.array(), 
  having: IncidentTypeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentTypeGroupByArgsSchema;
