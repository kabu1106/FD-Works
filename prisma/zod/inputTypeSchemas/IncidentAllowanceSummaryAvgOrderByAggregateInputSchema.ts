import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentAllowanceSummaryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryAvgOrderByAggregateInput> = z.strictObject({
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentAllowanceSummaryAvgOrderByAggregateInputSchema;
