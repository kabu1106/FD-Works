import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DispatchedVehicleMinOrderByAggregateInputSchema: z.ZodType<Prisma.DispatchedVehicleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchedAt: z.lazy(() => SortOrderSchema).optional(),
  returnedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default DispatchedVehicleMinOrderByAggregateInputSchema;
