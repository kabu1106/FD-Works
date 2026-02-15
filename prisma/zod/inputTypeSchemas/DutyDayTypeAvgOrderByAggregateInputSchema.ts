import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyDayTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DutyDayTypeAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyDayTypeAvgOrderByAggregateInputSchema;
