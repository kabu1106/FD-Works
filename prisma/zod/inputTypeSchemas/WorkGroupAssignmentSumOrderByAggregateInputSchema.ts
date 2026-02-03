import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkGroupAssignmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkGroupAssignmentSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkGroupAssignmentSumOrderByAggregateInputSchema;
