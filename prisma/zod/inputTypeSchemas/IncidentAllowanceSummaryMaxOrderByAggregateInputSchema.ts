import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentAllowanceSummaryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentAllowanceSummaryMaxOrderByAggregateInputSchema;
