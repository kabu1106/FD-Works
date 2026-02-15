import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttendanceEventOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AttendanceEventOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default AttendanceEventOrderByRelationAggregateInputSchema;
