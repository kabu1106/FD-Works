import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StaffOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StaffOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default StaffOrderByRelationAggregateInputSchema;
