import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkShiftDayOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkShiftDayOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkShiftDayOrderByRelationAggregateInputSchema;
