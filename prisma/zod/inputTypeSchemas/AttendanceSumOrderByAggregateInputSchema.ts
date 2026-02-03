import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttendanceSumOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceSumOrderByAggregateInput> = z.strictObject({
  departmentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default AttendanceSumOrderByAggregateInputSchema;
