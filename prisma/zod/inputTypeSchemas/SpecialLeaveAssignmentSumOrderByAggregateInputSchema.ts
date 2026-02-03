import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpecialLeaveAssignmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default SpecialLeaveAssignmentSumOrderByAggregateInputSchema;
