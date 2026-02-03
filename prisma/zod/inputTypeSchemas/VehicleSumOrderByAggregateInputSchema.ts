import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VehicleSumOrderByAggregateInputSchema: z.ZodType<Prisma.VehicleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.lazy(() => SortOrderSchema).optional(),
});

export default VehicleSumOrderByAggregateInputSchema;
