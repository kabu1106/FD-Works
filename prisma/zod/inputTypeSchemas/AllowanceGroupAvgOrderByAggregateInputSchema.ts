import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AllowanceGroupAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AllowanceGroupAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default AllowanceGroupAvgOrderByAggregateInputSchema;
