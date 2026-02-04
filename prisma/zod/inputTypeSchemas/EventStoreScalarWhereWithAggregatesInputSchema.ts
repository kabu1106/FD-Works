import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const EventStoreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventStoreScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => EventStoreScalarWhereWithAggregatesInputSchema), z.lazy(() => EventStoreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventStoreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventStoreScalarWhereWithAggregatesInputSchema), z.lazy(() => EventStoreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  aggregateId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  aggregateType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  aggregateVersion: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  eventType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  payload: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  causedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  schemaVersion: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default EventStoreScalarWhereWithAggregatesInputSchema;
