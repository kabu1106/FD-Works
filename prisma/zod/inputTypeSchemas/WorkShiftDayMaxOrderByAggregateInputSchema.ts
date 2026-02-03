import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftDayMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WorkShiftDayMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftDayMaxOrderByAggregateInputSchema;
