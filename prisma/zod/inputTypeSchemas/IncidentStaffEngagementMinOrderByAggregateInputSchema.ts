import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffEngagementMinOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  engagedFrom: z.lazy(() => SortOrderSchema).optional(),
  engagedTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffEngagementMinOrderByAggregateInputSchema;
