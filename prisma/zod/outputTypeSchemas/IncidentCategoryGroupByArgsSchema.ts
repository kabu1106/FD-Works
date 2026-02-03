import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryWhereInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereInputSchema'
import { IncidentCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentCategoryOrderByWithAggregationInputSchema'
import { IncidentCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentCategoryScalarFieldEnumSchema'
import { IncidentCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentCategoryScalarWhereWithAggregatesInputSchema'

export const IncidentCategoryGroupByArgsSchema: z.ZodType<Prisma.IncidentCategoryGroupByArgs> = z.object({
  where: IncidentCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentCategoryOrderByWithAggregationInputSchema.array(), IncidentCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentCategoryScalarFieldEnumSchema.array(), 
  having: IncidentCategoryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentCategoryGroupByArgsSchema;
