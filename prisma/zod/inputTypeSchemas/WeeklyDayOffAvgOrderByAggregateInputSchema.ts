import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WeeklyDayOffAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WeeklyDayOffAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default WeeklyDayOffAvgOrderByAggregateInputSchema;
