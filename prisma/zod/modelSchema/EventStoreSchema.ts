import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// EVENT STORE SCHEMA
/////////////////////////////////////////

export const EventStoreSchema = z.object({
  id: z.cuid(),
  aggregateId: z.string(),
  aggregateType: z.string(),
  aggregateVersion: z.number().int(),
  eventType: z.string(),
  payload: JsonValueSchema,
  occurredAt: z.coerce.date(),
  causedBy: z.string(),
  schemaVersion: z.number().int(),
  createdAt: z.coerce.date(),
})

export type EventStore = z.infer<typeof EventStoreSchema>

export default EventStoreSchema;
