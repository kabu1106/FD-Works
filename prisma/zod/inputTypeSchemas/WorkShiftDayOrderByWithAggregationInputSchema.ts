import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkShiftDayCountOrderByAggregateInputSchema } from './WorkShiftDayCountOrderByAggregateInputSchema';
import { WorkShiftDayAvgOrderByAggregateInputSchema } from './WorkShiftDayAvgOrderByAggregateInputSchema';
import { WorkShiftDayMaxOrderByAggregateInputSchema } from './WorkShiftDayMaxOrderByAggregateInputSchema';
import { WorkShiftDayMinOrderByAggregateInputSchema } from './WorkShiftDayMinOrderByAggregateInputSchema';
import { WorkShiftDaySumOrderByAggregateInputSchema } from './WorkShiftDaySumOrderByAggregateInputSchema';

export const WorkShiftDayOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkShiftDayOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkShiftDayCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorkShiftDayAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkShiftDayMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkShiftDayMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorkShiftDaySumOrderByAggregateInputSchema).optional(),
});

export default WorkShiftDayOrderByWithAggregationInputSchema;
