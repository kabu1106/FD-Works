import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffAllowanceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffAllowanceOrderByRelationAggregateInputSchema;
