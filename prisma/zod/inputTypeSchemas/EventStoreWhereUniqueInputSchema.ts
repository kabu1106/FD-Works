import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema } from './EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema';
import { EventStoreWhereInputSchema } from './EventStoreWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EventStoreWhereUniqueInputSchema: z.ZodType<Prisma.EventStoreWhereUniqueInput> = z.union([
  z.object({
    id: z.cuid(),
    aggregateId_aggregateVersion: z.lazy(() => EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.cuid(),
  }),
  z.object({
    aggregateId_aggregateVersion: z.lazy(() => EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.cuid().optional(),
  aggregateId_aggregateVersion: z.lazy(() => EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EventStoreWhereInputSchema), z.lazy(() => EventStoreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventStoreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventStoreWhereInputSchema), z.lazy(() => EventStoreWhereInputSchema).array() ]).optional(),
  aggregateId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  aggregateType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  aggregateVersion: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  eventType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  payload: z.lazy(() => JsonFilterSchema).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  causedBy: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  schemaVersion: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}));

export default EventStoreWhereUniqueInputSchema;
