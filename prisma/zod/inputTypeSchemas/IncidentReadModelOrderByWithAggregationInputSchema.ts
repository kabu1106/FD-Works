import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IncidentReadModelCountOrderByAggregateInputSchema } from './IncidentReadModelCountOrderByAggregateInputSchema';
import { IncidentReadModelAvgOrderByAggregateInputSchema } from './IncidentReadModelAvgOrderByAggregateInputSchema';
import { IncidentReadModelMaxOrderByAggregateInputSchema } from './IncidentReadModelMaxOrderByAggregateInputSchema';
import { IncidentReadModelMinOrderByAggregateInputSchema } from './IncidentReadModelMinOrderByAggregateInputSchema';
import { IncidentReadModelSumOrderByAggregateInputSchema } from './IncidentReadModelSumOrderByAggregateInputSchema';

export const IncidentReadModelOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentReadModelOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  closedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentReadModelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentReadModelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentReadModelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentReadModelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentReadModelSumOrderByAggregateInputSchema).optional(),
});

export default IncidentReadModelOrderByWithAggregationInputSchema;
