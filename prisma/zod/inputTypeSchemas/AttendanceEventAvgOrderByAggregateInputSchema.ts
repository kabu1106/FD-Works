import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttendanceEventAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceEventAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default AttendanceEventAvgOrderByAggregateInputSchema;
