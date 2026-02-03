import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IncidentCountOrderByAggregateInputSchema } from './IncidentCountOrderByAggregateInputSchema';
import { IncidentAvgOrderByAggregateInputSchema } from './IncidentAvgOrderByAggregateInputSchema';
import { IncidentMaxOrderByAggregateInputSchema } from './IncidentMaxOrderByAggregateInputSchema';
import { IncidentMinOrderByAggregateInputSchema } from './IncidentMinOrderByAggregateInputSchema';
import { IncidentSumOrderByAggregateInputSchema } from './IncidentSumOrderByAggregateInputSchema';

export const IncidentOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  typeId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  destinationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  destinationName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentSumOrderByAggregateInputSchema).optional(),
});

export default IncidentOrderByWithAggregationInputSchema;
