import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreWhereInputSchema } from '../inputTypeSchemas/EventStoreWhereInputSchema'
import { EventStoreOrderByWithRelationInputSchema } from '../inputTypeSchemas/EventStoreOrderByWithRelationInputSchema'
import { EventStoreWhereUniqueInputSchema } from '../inputTypeSchemas/EventStoreWhereUniqueInputSchema'

export const EventStoreAggregateArgsSchema: z.ZodType<Prisma.EventStoreAggregateArgs> = z.object({
  where: EventStoreWhereInputSchema.optional(), 
  orderBy: z.union([ EventStoreOrderByWithRelationInputSchema.array(), EventStoreOrderByWithRelationInputSchema ]).optional(),
  cursor: EventStoreWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default EventStoreAggregateArgsSchema;
