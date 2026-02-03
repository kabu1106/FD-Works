import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentCategoryCountOrderByAggregateInputSchema } from './IncidentCategoryCountOrderByAggregateInputSchema';
import { IncidentCategoryAvgOrderByAggregateInputSchema } from './IncidentCategoryAvgOrderByAggregateInputSchema';
import { IncidentCategoryMaxOrderByAggregateInputSchema } from './IncidentCategoryMaxOrderByAggregateInputSchema';
import { IncidentCategoryMinOrderByAggregateInputSchema } from './IncidentCategoryMinOrderByAggregateInputSchema';
import { IncidentCategorySumOrderByAggregateInputSchema } from './IncidentCategorySumOrderByAggregateInputSchema';

export const IncidentCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentCategoryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentCategorySumOrderByAggregateInputSchema).optional(),
});

export default IncidentCategoryOrderByWithAggregationInputSchema;
