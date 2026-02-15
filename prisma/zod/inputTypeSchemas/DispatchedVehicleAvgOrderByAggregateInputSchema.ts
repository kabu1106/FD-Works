import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DispatchedVehicleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DispatchedVehicleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
});

export default DispatchedVehicleAvgOrderByAggregateInputSchema;
