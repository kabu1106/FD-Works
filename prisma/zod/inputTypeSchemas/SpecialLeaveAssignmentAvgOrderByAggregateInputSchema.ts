import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpecialLeaveAssignmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default SpecialLeaveAssignmentAvgOrderByAggregateInputSchema;
