import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffAllowanceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceAvgOrderByAggregateInput> = z.strictObject({
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffAllowanceAvgOrderByAggregateInputSchema;
