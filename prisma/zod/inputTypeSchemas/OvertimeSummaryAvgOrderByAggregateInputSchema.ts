import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSummaryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSummaryAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  totalMinutes: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSummaryAvgOrderByAggregateInputSchema;
