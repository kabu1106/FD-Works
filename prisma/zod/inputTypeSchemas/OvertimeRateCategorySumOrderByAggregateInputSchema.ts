import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeRateCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeRateCategorySumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeRateCategorySumOrderByAggregateInputSchema;
