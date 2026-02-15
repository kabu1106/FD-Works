import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyDayTypeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DutyDayTypeOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyDayTypeOrderByRelationAggregateInputSchema;
