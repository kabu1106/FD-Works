import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StaffInVehicleMinOrderByAggregateInputSchema: z.ZodType<Prisma.StaffInVehicleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dispatchedVehicleId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default StaffInVehicleMinOrderByAggregateInputSchema;
