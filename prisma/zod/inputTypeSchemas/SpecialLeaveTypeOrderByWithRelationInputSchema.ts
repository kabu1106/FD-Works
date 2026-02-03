import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpecialLeaveGroupOrderByWithRelationInputSchema } from './SpecialLeaveGroupOrderByWithRelationInputSchema';
import { SpecialLeaveAssignmentOrderByRelationAggregateInputSchema } from './SpecialLeaveAssignmentOrderByRelationAggregateInputSchema';

export const SpecialLeaveTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.SpecialLeaveTypeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  specialLeaveGroupId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  specialLeaveGroup: z.lazy(() => SpecialLeaveGroupOrderByWithRelationInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentOrderByRelationAggregateInputSchema).optional(),
});

export default SpecialLeaveTypeOrderByWithRelationInputSchema;
