import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreUpdateInputSchema } from '../inputTypeSchemas/EventStoreUpdateInputSchema'
import { EventStoreUncheckedUpdateInputSchema } from '../inputTypeSchemas/EventStoreUncheckedUpdateInputSchema'
import { EventStoreWhereUniqueInputSchema } from '../inputTypeSchemas/EventStoreWhereUniqueInputSchema'
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

export const EventStoreUpdateArgsSchema: z.ZodType<Prisma.EventStoreUpdateArgs> = z.object({
  select: EventStoreSelectSchema.optional(),
  data: z.union([ EventStoreUpdateInputSchema, EventStoreUncheckedUpdateInputSchema ]),
  where: EventStoreWhereUniqueInputSchema, 
}).strict();

export default EventStoreUpdateArgsSchema;
