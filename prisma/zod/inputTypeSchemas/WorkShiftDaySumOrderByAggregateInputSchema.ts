import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftDaySumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftDaySumOrderByAggregateInput> = z.strictObject({
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftDaySumOrderByAggregateInputSchema;
