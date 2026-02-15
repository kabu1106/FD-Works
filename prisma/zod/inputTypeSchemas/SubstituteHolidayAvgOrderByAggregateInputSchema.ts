import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubstituteHolidayAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubstituteHolidayAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default SubstituteHolidayAvgOrderByAggregateInputSchema;
