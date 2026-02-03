import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffAvgOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffAvgOrderByAggregateInputSchema;
