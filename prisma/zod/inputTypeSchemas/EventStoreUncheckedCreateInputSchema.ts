import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const EventStoreUncheckedCreateInputSchema: z.ZodType<Prisma.EventStoreUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  aggregateId: z.string(),
  aggregateType: z.string(),
  aggregateVersion: z.number().int(),
  eventType: z.string(),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema ]),
  occurredAt: z.coerce.date(),
  causedBy: z.string(),
  schemaVersion: z.number().int(),
  createdAt: z.coerce.date().optional(),
});

export default EventStoreUncheckedCreateInputSchema;
