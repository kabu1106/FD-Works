import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentAllowanceSummaryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentAllowanceSummaryOrderByRelationAggregateInputSchema;
