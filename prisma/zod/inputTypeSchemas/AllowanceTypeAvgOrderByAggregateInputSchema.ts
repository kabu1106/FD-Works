import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AllowanceTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AllowanceTypeAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  allowanceGroupId: z.lazy(() => SortOrderSchema).optional(),
});

export default AllowanceTypeAvgOrderByAggregateInputSchema;
