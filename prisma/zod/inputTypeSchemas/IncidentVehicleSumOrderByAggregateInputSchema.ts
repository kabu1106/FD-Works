import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentVehicleSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentVehicleSumOrderByAggregateInput> = z.strictObject({
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentVehicleSumOrderByAggregateInputSchema;
