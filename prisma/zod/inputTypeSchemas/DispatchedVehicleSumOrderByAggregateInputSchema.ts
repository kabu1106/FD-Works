import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DispatchedVehicleSumOrderByAggregateInputSchema: z.ZodType<Prisma.DispatchedVehicleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
});

export default DispatchedVehicleSumOrderByAggregateInputSchema;
