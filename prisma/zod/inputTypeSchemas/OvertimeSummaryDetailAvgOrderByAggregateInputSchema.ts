import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSummaryDetailAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailAvgOrderByAggregateInput> = z.strictObject({
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSummaryDetailAvgOrderByAggregateInputSchema;
