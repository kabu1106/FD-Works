import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OvertimeSlotResolvedCountOrderByAggregateInputSchema } from './OvertimeSlotResolvedCountOrderByAggregateInputSchema';
import { OvertimeSlotResolvedAvgOrderByAggregateInputSchema } from './OvertimeSlotResolvedAvgOrderByAggregateInputSchema';
import { OvertimeSlotResolvedMaxOrderByAggregateInputSchema } from './OvertimeSlotResolvedMaxOrderByAggregateInputSchema';
import { OvertimeSlotResolvedMinOrderByAggregateInputSchema } from './OvertimeSlotResolvedMinOrderByAggregateInputSchema';
import { OvertimeSlotResolvedSumOrderByAggregateInputSchema } from './OvertimeSlotResolvedSumOrderByAggregateInputSchema';

export const OvertimeSlotResolvedOrderByWithAggregationInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  startAt: z.lazy(() => SortOrderSchema).optional(),
  endAt: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OvertimeSlotResolvedCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OvertimeSlotResolvedAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OvertimeSlotResolvedMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OvertimeSlotResolvedMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OvertimeSlotResolvedSumOrderByAggregateInputSchema).optional(),
});

export default OvertimeSlotResolvedOrderByWithAggregationInputSchema;
