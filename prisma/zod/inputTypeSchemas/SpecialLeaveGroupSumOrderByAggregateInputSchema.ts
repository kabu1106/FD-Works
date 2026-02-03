import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpecialLeaveGroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.SpecialLeaveGroupSumOrderByAggregateInput> = z.strictObject({
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default SpecialLeaveGroupSumOrderByAggregateInputSchema;
