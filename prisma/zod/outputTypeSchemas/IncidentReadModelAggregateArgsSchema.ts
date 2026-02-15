import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelWhereInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereInputSchema'
import { IncidentReadModelOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentReadModelOrderByWithRelationInputSchema'
import { IncidentReadModelWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereUniqueInputSchema'

export const IncidentReadModelAggregateArgsSchema: z.ZodType<Prisma.IncidentReadModelAggregateArgs> = z.object({
  where: IncidentReadModelWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentReadModelOrderByWithRelationInputSchema.array(), IncidentReadModelOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentReadModelWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentReadModelAggregateArgsSchema;
