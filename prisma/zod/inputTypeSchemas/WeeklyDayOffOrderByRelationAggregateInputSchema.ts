import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WeeklyDayOffOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WeeklyDayOffOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default WeeklyDayOffOrderByRelationAggregateInputSchema;
