import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IncidentReadModelOrderByWithRelationInputSchema } from './IncidentReadModelOrderByWithRelationInputSchema';
import { StaffInVehicleOrderByRelationAggregateInputSchema } from './StaffInVehicleOrderByRelationAggregateInputSchema';

export const DispatchedVehicleOrderByWithRelationInputSchema: z.ZodType<Prisma.DispatchedVehicleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchedAt: z.lazy(() => SortOrderSchema).optional(),
  returnedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  incident: z.lazy(() => IncidentReadModelOrderByWithRelationInputSchema).optional(),
  staffs: z.lazy(() => StaffInVehicleOrderByRelationAggregateInputSchema).optional(),
});

export default DispatchedVehicleOrderByWithRelationInputSchema;
