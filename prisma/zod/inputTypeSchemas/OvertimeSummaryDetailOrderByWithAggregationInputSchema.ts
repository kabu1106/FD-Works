import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OvertimeSummaryDetailCountOrderByAggregateInputSchema } from './OvertimeSummaryDetailCountOrderByAggregateInputSchema';
import { OvertimeSummaryDetailAvgOrderByAggregateInputSchema } from './OvertimeSummaryDetailAvgOrderByAggregateInputSchema';
import { OvertimeSummaryDetailMaxOrderByAggregateInputSchema } from './OvertimeSummaryDetailMaxOrderByAggregateInputSchema';
import { OvertimeSummaryDetailMinOrderByAggregateInputSchema } from './OvertimeSummaryDetailMinOrderByAggregateInputSchema';
import { OvertimeSummaryDetailSumOrderByAggregateInputSchema } from './OvertimeSummaryDetailSumOrderByAggregateInputSchema';

export const OvertimeSummaryDetailOrderByWithAggregationInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  overtimeSummaryId: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OvertimeSummaryDetailCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OvertimeSummaryDetailAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OvertimeSummaryDetailMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OvertimeSummaryDetailMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OvertimeSummaryDetailSumOrderByAggregateInputSchema).optional(),
});

export default OvertimeSummaryDetailOrderByWithAggregationInputSchema;
