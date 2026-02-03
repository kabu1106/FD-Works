import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkShiftCountOrderByAggregateInputSchema } from './WorkShiftCountOrderByAggregateInputSchema';
import { WorkShiftAvgOrderByAggregateInputSchema } from './WorkShiftAvgOrderByAggregateInputSchema';
import { WorkShiftMaxOrderByAggregateInputSchema } from './WorkShiftMaxOrderByAggregateInputSchema';
import { WorkShiftMinOrderByAggregateInputSchema } from './WorkShiftMinOrderByAggregateInputSchema';
import { WorkShiftSumOrderByAggregateInputSchema } from './WorkShiftSumOrderByAggregateInputSchema';

export const WorkShiftOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkShiftOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  shiftType: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkShiftCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorkShiftAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkShiftMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkShiftMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorkShiftSumOrderByAggregateInputSchema).optional(),
});

export default WorkShiftOrderByWithAggregationInputSchema;
