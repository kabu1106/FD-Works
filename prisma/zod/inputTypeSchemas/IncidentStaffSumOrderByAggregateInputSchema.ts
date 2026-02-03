import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffSumOrderByAggregateInputSchema;
