import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreWhereInputSchema } from '../inputTypeSchemas/EventStoreWhereInputSchema'
import { EventStoreOrderByWithRelationInputSchema } from '../inputTypeSchemas/EventStoreOrderByWithRelationInputSchema'
import { EventStoreWhereUniqueInputSchema } from '../inputTypeSchemas/EventStoreWhereUniqueInputSchema'
import { EventStoreScalarFieldEnumSchema } from '../inputTypeSchemas/EventStoreScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventStoreSelectSchema: z.ZodType<Prisma.EventStoreSelect> = z.object({
  id: z.boolean().optional(),
  aggregateId: z.boolean().optional(),
  aggregateType: z.boolean().optional(),
  aggregateVersion: z.boolean().optional(),
  eventType: z.boolean().optional(),
  payload: z.boolean().optional(),
  occurredAt: z.boolean().optional(),
  causedBy: z.boolean().optional(),
  schemaVersion: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const EventStoreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventStoreFindFirstOrThrowArgs> = z.object({
  select: EventStoreSelectSchema.optional(),
  where: EventStoreWhereInputSchema.optional(), 
  orderBy: z.union([ EventStoreOrderByWithRelationInputSchema.array(), EventStoreOrderByWithRelationInputSchema ]).optional(),
  cursor: EventStoreWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventStoreScalarFieldEnumSchema, EventStoreScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default EventStoreFindFirstOrThrowArgsSchema;
