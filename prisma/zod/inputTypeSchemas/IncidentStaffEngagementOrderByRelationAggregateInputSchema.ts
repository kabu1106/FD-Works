import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffEngagementOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffEngagementOrderByRelationAggregateInputSchema;
