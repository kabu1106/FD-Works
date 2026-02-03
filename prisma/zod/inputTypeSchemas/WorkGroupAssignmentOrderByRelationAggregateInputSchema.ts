import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkGroupAssignmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkGroupAssignmentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default WorkGroupAssignmentOrderByRelationAggregateInputSchema;
