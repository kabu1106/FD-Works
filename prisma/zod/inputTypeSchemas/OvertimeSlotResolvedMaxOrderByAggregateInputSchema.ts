import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSlotResolvedMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  startAt: z.lazy(() => SortOrderSchema).optional(),
  endAt: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSlotResolvedMaxOrderByAggregateInputSchema;
