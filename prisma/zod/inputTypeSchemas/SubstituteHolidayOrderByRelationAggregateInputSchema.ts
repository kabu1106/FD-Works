import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubstituteHolidayOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubstituteHolidayOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default SubstituteHolidayOrderByRelationAggregateInputSchema;
