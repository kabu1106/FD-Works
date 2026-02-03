import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentOrderByWithRelationInputSchema } from './IncidentOrderByWithRelationInputSchema';
import { VehicleOrderByWithRelationInputSchema } from './VehicleOrderByWithRelationInputSchema';
import { IncidentStaffOrderByRelationAggregateInputSchema } from './IncidentStaffOrderByRelationAggregateInputSchema';

export const IncidentVehicleOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentVehicleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchTime: z.lazy(() => SortOrderSchema).optional(),
  returnTime: z.lazy(() => SortOrderSchema).optional(),
  incident: z.lazy(() => IncidentOrderByWithRelationInputSchema).optional(),
  vehicle: z.lazy(() => VehicleOrderByWithRelationInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentVehicleOrderByWithRelationInputSchema;
