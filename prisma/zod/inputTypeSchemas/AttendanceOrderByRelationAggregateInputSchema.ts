import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttendanceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AttendanceOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default AttendanceOrderByRelationAggregateInputSchema;
