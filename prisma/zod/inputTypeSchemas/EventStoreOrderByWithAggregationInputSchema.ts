import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EventStoreCountOrderByAggregateInputSchema } from './EventStoreCountOrderByAggregateInputSchema';
import { EventStoreAvgOrderByAggregateInputSchema } from './EventStoreAvgOrderByAggregateInputSchema';
import { EventStoreMaxOrderByAggregateInputSchema } from './EventStoreMaxOrderByAggregateInputSchema';
import { EventStoreMinOrderByAggregateInputSchema } from './EventStoreMinOrderByAggregateInputSchema';
import { EventStoreSumOrderByAggregateInputSchema } from './EventStoreSumOrderByAggregateInputSchema';

export const EventStoreOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventStoreOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  aggregateId: z.lazy(() => SortOrderSchema).optional(),
  aggregateType: z.lazy(() => SortOrderSchema).optional(),
  aggregateVersion: z.lazy(() => SortOrderSchema).optional(),
  eventType: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  causedBy: z.lazy(() => SortOrderSchema).optional(),
  schemaVersion: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventStoreCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EventStoreAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventStoreMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventStoreMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EventStoreSumOrderByAggregateInputSchema).optional(),
});

export default EventStoreOrderByWithAggregationInputSchema;
