import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSummaryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OvertimeSummaryOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSummaryOrderByRelationAggregateInputSchema;
