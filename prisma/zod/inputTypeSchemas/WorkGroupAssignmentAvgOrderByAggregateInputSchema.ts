import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkGroupAssignmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorkGroupAssignmentAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkGroupAssignmentAvgOrderByAggregateInputSchema;
