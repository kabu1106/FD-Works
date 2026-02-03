import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentVehicleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentVehicleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchTime: z.lazy(() => SortOrderSchema).optional(),
  returnTime: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentVehicleMaxOrderByAggregateInputSchema;
