import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OvertimeRateCategoryCountOrderByAggregateInputSchema } from './OvertimeRateCategoryCountOrderByAggregateInputSchema';
import { OvertimeRateCategoryAvgOrderByAggregateInputSchema } from './OvertimeRateCategoryAvgOrderByAggregateInputSchema';
import { OvertimeRateCategoryMaxOrderByAggregateInputSchema } from './OvertimeRateCategoryMaxOrderByAggregateInputSchema';
import { OvertimeRateCategoryMinOrderByAggregateInputSchema } from './OvertimeRateCategoryMinOrderByAggregateInputSchema';
import { OvertimeRateCategorySumOrderByAggregateInputSchema } from './OvertimeRateCategorySumOrderByAggregateInputSchema';

export const OvertimeRateCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.OvertimeRateCategoryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OvertimeRateCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OvertimeRateCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OvertimeRateCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OvertimeRateCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OvertimeRateCategorySumOrderByAggregateInputSchema).optional(),
});

export default OvertimeRateCategoryOrderByWithAggregationInputSchema;
