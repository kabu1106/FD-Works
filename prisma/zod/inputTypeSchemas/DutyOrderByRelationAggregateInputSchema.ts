import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DutyOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyOrderByRelationAggregateInputSchema;
