import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OvertimeSummaryCountOrderByAggregateInputSchema } from './OvertimeSummaryCountOrderByAggregateInputSchema';
import { OvertimeSummaryAvgOrderByAggregateInputSchema } from './OvertimeSummaryAvgOrderByAggregateInputSchema';
import { OvertimeSummaryMaxOrderByAggregateInputSchema } from './OvertimeSummaryMaxOrderByAggregateInputSchema';
import { OvertimeSummaryMinOrderByAggregateInputSchema } from './OvertimeSummaryMinOrderByAggregateInputSchema';
import { OvertimeSummarySumOrderByAggregateInputSchema } from './OvertimeSummarySumOrderByAggregateInputSchema';

export const OvertimeSummaryOrderByWithAggregationInputSchema: z.ZodType<Prisma.OvertimeSummaryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  calculationVersion: z.lazy(() => SortOrderSchema).optional(),
  totalMinutes: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
  calculatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OvertimeSummaryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OvertimeSummaryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OvertimeSummaryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OvertimeSummaryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OvertimeSummarySumOrderByAggregateInputSchema).optional(),
});

export default OvertimeSummaryOrderByWithAggregationInputSchema;
