import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DispatchedVehicleOrderByWithRelationInputSchema } from './DispatchedVehicleOrderByWithRelationInputSchema';

export const StaffInVehicleOrderByWithRelationInputSchema: z.ZodType<Prisma.StaffInVehicleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dispatchedVehicleId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  vehicle: z.lazy(() => DispatchedVehicleOrderByWithRelationInputSchema).optional(),
});

export default StaffInVehicleOrderByWithRelationInputSchema;
