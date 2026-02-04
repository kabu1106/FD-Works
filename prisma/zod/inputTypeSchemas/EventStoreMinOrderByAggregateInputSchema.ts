import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EventStoreMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventStoreMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  aggregateId: z.lazy(() => SortOrderSchema).optional(),
  aggregateType: z.lazy(() => SortOrderSchema).optional(),
  aggregateVersion: z.lazy(() => SortOrderSchema).optional(),
  eventType: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  causedBy: z.lazy(() => SortOrderSchema).optional(),
  schemaVersion: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export default EventStoreMinOrderByAggregateInputSchema;
