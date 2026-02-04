import { z } from 'zod';

export const EventStoreScalarFieldEnumSchema = z.enum(['id','aggregateId','aggregateType','aggregateVersion','eventType','payload','occurredAt','causedBy','schemaVersion','createdAt']);

export default EventStoreScalarFieldEnumSchema;
