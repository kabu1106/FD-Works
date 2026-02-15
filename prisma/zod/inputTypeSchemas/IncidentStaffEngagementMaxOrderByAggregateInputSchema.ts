import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffEngagementMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  engagedFrom: z.lazy(() => SortOrderSchema).optional(),
  engagedTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffEngagementMaxOrderByAggregateInputSchema;
