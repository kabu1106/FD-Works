import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentStaffAllowanceCountOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentStaffAllowanceCountOrderByAggregateInputSchema;
