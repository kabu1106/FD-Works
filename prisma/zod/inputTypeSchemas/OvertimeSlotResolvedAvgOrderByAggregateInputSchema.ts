import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSlotResolvedAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSlotResolvedAvgOrderByAggregateInputSchema;
