import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentAllowanceSummarySumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentAllowanceSummarySumOrderByAggregateInput> = z.strictObject({
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentAllowanceSummarySumOrderByAggregateInputSchema;
