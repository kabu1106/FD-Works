import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AllowanceGroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.AllowanceGroupSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default AllowanceGroupSumOrderByAggregateInputSchema;
