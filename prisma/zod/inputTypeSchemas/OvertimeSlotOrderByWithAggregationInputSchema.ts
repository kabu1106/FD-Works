import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OvertimeSlotCountOrderByAggregateInputSchema } from './OvertimeSlotCountOrderByAggregateInputSchema';
import { OvertimeSlotAvgOrderByAggregateInputSchema } from './OvertimeSlotAvgOrderByAggregateInputSchema';
import { OvertimeSlotMaxOrderByAggregateInputSchema } from './OvertimeSlotMaxOrderByAggregateInputSchema';
import { OvertimeSlotMinOrderByAggregateInputSchema } from './OvertimeSlotMinOrderByAggregateInputSchema';
import { OvertimeSlotSumOrderByAggregateInputSchema } from './OvertimeSlotSumOrderByAggregateInputSchema';

export const OvertimeSlotOrderByWithAggregationInputSchema: z.ZodType<Prisma.OvertimeSlotOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
  startMinute: z.lazy(() => SortOrderSchema).optional(),
  endMinute: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => OvertimeSlotCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OvertimeSlotAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OvertimeSlotMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OvertimeSlotMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OvertimeSlotSumOrderByAggregateInputSchema).optional(),
});

export default OvertimeSlotOrderByWithAggregationInputSchema;
