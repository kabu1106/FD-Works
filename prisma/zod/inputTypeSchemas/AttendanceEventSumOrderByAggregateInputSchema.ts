import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttendanceEventSumOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceEventSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default AttendanceEventSumOrderByAggregateInputSchema;
