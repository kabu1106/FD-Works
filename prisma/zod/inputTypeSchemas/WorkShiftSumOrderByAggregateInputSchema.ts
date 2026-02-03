import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftSumOrderByAggregateInputSchema;
