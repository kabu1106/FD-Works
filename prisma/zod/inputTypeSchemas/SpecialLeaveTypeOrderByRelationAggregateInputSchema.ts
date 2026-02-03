import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpecialLeaveTypeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SpecialLeaveTypeOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default SpecialLeaveTypeOrderByRelationAggregateInputSchema;
