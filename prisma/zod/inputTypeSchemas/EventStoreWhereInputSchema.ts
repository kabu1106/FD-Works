import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EventStoreWhereInputSchema: z.ZodType<Prisma.EventStoreWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => EventStoreWhereInputSchema), z.lazy(() => EventStoreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventStoreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventStoreWhereInputSchema), z.lazy(() => EventStoreWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  aggregateId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  aggregateType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  aggregateVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  eventType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  payload: z.lazy(() => JsonFilterSchema).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  causedBy: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  schemaVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default EventStoreWhereInputSchema;
