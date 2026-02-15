import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentStaffEngagementCountOrderByAggregateInputSchema } from './IncidentStaffEngagementCountOrderByAggregateInputSchema';
import { IncidentStaffEngagementAvgOrderByAggregateInputSchema } from './IncidentStaffEngagementAvgOrderByAggregateInputSchema';
import { IncidentStaffEngagementMaxOrderByAggregateInputSchema } from './IncidentStaffEngagementMaxOrderByAggregateInputSchema';
import { IncidentStaffEngagementMinOrderByAggregateInputSchema } from './IncidentStaffEngagementMinOrderByAggregateInputSchema';
import { IncidentStaffEngagementSumOrderByAggregateInputSchema } from './IncidentStaffEngagementSumOrderByAggregateInputSchema';

export const IncidentStaffEngagementOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentStaffEngagementOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  engagedFrom: z.lazy(() => SortOrderSchema).optional(),
  engagedTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentStaffEngagementCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentStaffEngagementAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentStaffEngagementMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentStaffEngagementMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentStaffEngagementSumOrderByAggregateInputSchema).optional(),
});

export default IncidentStaffEngagementOrderByWithAggregationInputSchema;
