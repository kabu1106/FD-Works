import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EventStoreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventStoreAvgOrderByAggregateInput> = z.strictObject({
  aggregateVersion: z.lazy(() => SortOrderSchema).optional(),
  schemaVersion: z.lazy(() => SortOrderSchema).optional(),
});

export default EventStoreAvgOrderByAggregateInputSchema;
