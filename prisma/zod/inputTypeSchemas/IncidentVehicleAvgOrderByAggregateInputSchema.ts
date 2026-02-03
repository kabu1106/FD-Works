import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentVehicleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentVehicleAvgOrderByAggregateInput> = z.strictObject({
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentVehicleAvgOrderByAggregateInputSchema;
