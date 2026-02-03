import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpecialLeaveTypeOrderByRelationAggregateInputSchema } from './SpecialLeaveTypeOrderByRelationAggregateInputSchema';

export const SpecialLeaveGroupOrderByWithRelationInputSchema: z.ZodType<Prisma.SpecialLeaveGroupOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeOrderByRelationAggregateInputSchema).optional(),
});

export default SpecialLeaveGroupOrderByWithRelationInputSchema;
