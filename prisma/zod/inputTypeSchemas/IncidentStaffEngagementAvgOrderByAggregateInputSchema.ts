import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffEngagementAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffEngagementAvgOrderByAggregateInputSchema;
