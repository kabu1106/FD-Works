import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WeeklyDayOffCountOrderByAggregateInputSchema } from './WeeklyDayOffCountOrderByAggregateInputSchema';
import { WeeklyDayOffAvgOrderByAggregateInputSchema } from './WeeklyDayOffAvgOrderByAggregateInputSchema';
import { WeeklyDayOffMaxOrderByAggregateInputSchema } from './WeeklyDayOffMaxOrderByAggregateInputSchema';
import { WeeklyDayOffMinOrderByAggregateInputSchema } from './WeeklyDayOffMinOrderByAggregateInputSchema';
import { WeeklyDayOffSumOrderByAggregateInputSchema } from './WeeklyDayOffSumOrderByAggregateInputSchema';

export const WeeklyDayOffOrderByWithAggregationInputSchema: z.ZodType<Prisma.WeeklyDayOffOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WeeklyDayOffCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WeeklyDayOffAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WeeklyDayOffMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WeeklyDayOffMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WeeklyDayOffSumOrderByAggregateInputSchema).optional(),
});

export default WeeklyDayOffOrderByWithAggregationInputSchema;
