import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WeeklyDayOffSumOrderByAggregateInputSchema: z.ZodType<Prisma.WeeklyDayOffSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default WeeklyDayOffSumOrderByAggregateInputSchema;
