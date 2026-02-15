import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffEngagementSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffEngagementSumOrderByAggregateInputSchema;
