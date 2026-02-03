import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeWhereInputSchema } from '../inputTypeSchemas/IncidentTypeWhereInputSchema'
import { IncidentTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentTypeOrderByWithRelationInputSchema'
import { IncidentTypeWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentTypeWhereUniqueInputSchema'

export const IncidentTypeAggregateArgsSchema: z.ZodType<Prisma.IncidentTypeAggregateArgs> = z.object({
  where: IncidentTypeWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentTypeOrderByWithRelationInputSchema.array(), IncidentTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentTypeAggregateArgsSchema;
