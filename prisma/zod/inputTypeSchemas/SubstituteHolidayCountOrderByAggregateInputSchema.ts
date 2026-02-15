import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubstituteHolidayCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubstituteHolidayCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  originalHoliday: z.lazy(() => SortOrderSchema).optional(),
  substituteDate: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.lazy(() => SortOrderSchema).optional(),
});

export default SubstituteHolidayCountOrderByAggregateInputSchema;
