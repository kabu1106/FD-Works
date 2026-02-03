import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftDayCountOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftDayCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftDayCountOrderByAggregateInputSchema;
