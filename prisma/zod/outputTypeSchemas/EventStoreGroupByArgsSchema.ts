import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreWhereInputSchema } from '../inputTypeSchemas/EventStoreWhereInputSchema'
import { EventStoreOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EventStoreOrderByWithAggregationInputSchema'
import { EventStoreScalarFieldEnumSchema } from '../inputTypeSchemas/EventStoreScalarFieldEnumSchema'
import { EventStoreScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EventStoreScalarWhereWithAggregatesInputSchema'

export const EventStoreGroupByArgsSchema: z.ZodType<Prisma.EventStoreGroupByArgs> = z.object({
  where: EventStoreWhereInputSchema.optional(), 
  orderBy: z.union([ EventStoreOrderByWithAggregationInputSchema.array(), EventStoreOrderByWithAggregationInputSchema ]).optional(),
  by: EventStoreScalarFieldEnumSchema.array(), 
  having: EventStoreScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default EventStoreGroupByArgsSchema;
