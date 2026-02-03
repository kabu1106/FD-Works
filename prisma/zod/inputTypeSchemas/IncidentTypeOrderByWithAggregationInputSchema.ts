import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentTypeCountOrderByAggregateInputSchema } from './IncidentTypeCountOrderByAggregateInputSchema';
import { IncidentTypeAvgOrderByAggregateInputSchema } from './IncidentTypeAvgOrderByAggregateInputSchema';
import { IncidentTypeMaxOrderByAggregateInputSchema } from './IncidentTypeMaxOrderByAggregateInputSchema';
import { IncidentTypeMinOrderByAggregateInputSchema } from './IncidentTypeMinOrderByAggregateInputSchema';
import { IncidentTypeSumOrderByAggregateInputSchema } from './IncidentTypeSumOrderByAggregateInputSchema';

export const IncidentTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentTypeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentTypeSumOrderByAggregateInputSchema).optional(),
});

export default IncidentTypeOrderByWithAggregationInputSchema;
