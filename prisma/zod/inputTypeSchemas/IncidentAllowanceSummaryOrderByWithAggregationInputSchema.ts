import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentAllowanceSummaryCountOrderByAggregateInputSchema } from './IncidentAllowanceSummaryCountOrderByAggregateInputSchema';
import { IncidentAllowanceSummaryAvgOrderByAggregateInputSchema } from './IncidentAllowanceSummaryAvgOrderByAggregateInputSchema';
import { IncidentAllowanceSummaryMaxOrderByAggregateInputSchema } from './IncidentAllowanceSummaryMaxOrderByAggregateInputSchema';
import { IncidentAllowanceSummaryMinOrderByAggregateInputSchema } from './IncidentAllowanceSummaryMinOrderByAggregateInputSchema';
import { IncidentAllowanceSummarySumOrderByAggregateInputSchema } from './IncidentAllowanceSummarySumOrderByAggregateInputSchema';

export const IncidentAllowanceSummaryOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentAllowanceSummaryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentAllowanceSummaryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentAllowanceSummaryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentAllowanceSummaryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentAllowanceSummarySumOrderByAggregateInputSchema).optional(),
});

export default IncidentAllowanceSummaryOrderByWithAggregationInputSchema;
