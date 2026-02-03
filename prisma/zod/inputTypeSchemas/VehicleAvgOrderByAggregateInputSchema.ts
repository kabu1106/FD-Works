import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VehicleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VehicleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.lazy(() => SortOrderSchema).optional(),
});

export default VehicleAvgOrderByAggregateInputSchema;
