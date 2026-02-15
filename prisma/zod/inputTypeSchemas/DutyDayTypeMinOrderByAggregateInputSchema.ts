import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyDayTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.DutyDayTypeMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  dayType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyDayTypeMinOrderByAggregateInputSchema;
