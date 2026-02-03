import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentStaffOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffOrderByRelationAggregateInputSchema;
