import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftDayAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftDayAvgOrderByAggregateInput> = z.strictObject({
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftDayAvgOrderByAggregateInputSchema;
