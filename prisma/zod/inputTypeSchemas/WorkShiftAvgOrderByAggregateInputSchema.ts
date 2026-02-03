import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftAvgOrderByAggregateInputSchema;
