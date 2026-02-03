import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkGroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkGroupSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkGroupSumOrderByAggregateInputSchema;
