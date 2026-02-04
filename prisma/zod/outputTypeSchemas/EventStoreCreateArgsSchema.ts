import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreCreateInputSchema } from '../inputTypeSchemas/EventStoreCreateInputSchema'
import { EventStoreUncheckedCreateInputSchema } from '../inputTypeSchemas/EventStoreUncheckedCreateInputSchema'
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

export const EventStoreCreateArgsSchema: z.ZodType<Prisma.EventStoreCreateArgs> = z.object({
  select: EventStoreSelectSchema.optional(),
  data: z.union([ EventStoreCreateInputSchema, EventStoreUncheckedCreateInputSchema ]),
}).strict();

export default EventStoreCreateArgsSchema;
