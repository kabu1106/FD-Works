import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpecialLeaveGroupAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SpecialLeaveGroupAvgOrderByAggregateInput> = z.strictObject({
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default SpecialLeaveGroupAvgOrderByAggregateInputSchema;
