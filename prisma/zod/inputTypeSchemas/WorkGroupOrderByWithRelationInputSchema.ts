import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OvertimeSlotOrderByRelationAggregateInputSchema } from './OvertimeSlotOrderByRelationAggregateInputSchema';
import { WorkGroupAssignmentOrderByRelationAggregateInputSchema } from './WorkGroupAssignmentOrderByRelationAggregateInputSchema';

export const WorkGroupOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkGroupOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotOrderByRelationAggregateInputSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentOrderByRelationAggregateInputSchema).optional(),
});

export default WorkGroupOrderByWithRelationInputSchema;
