import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffAllowanceSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceSumOrderByAggregateInput> = z.strictObject({
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffAllowanceSumOrderByAggregateInputSchema;
