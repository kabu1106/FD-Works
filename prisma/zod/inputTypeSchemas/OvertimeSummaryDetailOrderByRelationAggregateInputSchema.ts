import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSummaryDetailOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSummaryDetailOrderByRelationAggregateInputSchema;
