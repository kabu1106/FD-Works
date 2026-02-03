import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentWhereInputSchema } from '../inputTypeSchemas/IncidentWhereInputSchema'
import { IncidentOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentOrderByWithRelationInputSchema'
import { IncidentWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentWhereUniqueInputSchema'

export const IncidentAggregateArgsSchema: z.ZodType<Prisma.IncidentAggregateArgs> = z.object({
  where: IncidentWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentOrderByWithRelationInputSchema.array(), IncidentOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentAggregateArgsSchema;
