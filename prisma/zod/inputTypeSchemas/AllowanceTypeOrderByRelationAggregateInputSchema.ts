import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AllowanceTypeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AllowanceTypeOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default AllowanceTypeOrderByRelationAggregateInputSchema;
