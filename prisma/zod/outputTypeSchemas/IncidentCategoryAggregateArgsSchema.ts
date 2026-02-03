import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryWhereInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereInputSchema'
import { IncidentCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentCategoryOrderByWithRelationInputSchema'
import { IncidentCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereUniqueInputSchema'

export const IncidentCategoryAggregateArgsSchema: z.ZodType<Prisma.IncidentCategoryAggregateArgs> = z.object({
  where: IncidentCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentCategoryOrderByWithRelationInputSchema.array(), IncidentCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentCategoryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentCategoryAggregateArgsSchema;
