import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedOneWithoutVehiclesInputSchema } from './IncidentCreateNestedOneWithoutVehiclesInputSchema';
import { VehicleCreateNestedOneWithoutIncidentsInputSchema } from './VehicleCreateNestedOneWithoutIncidentsInputSchema';

export const IncidentVehicleCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  incident: z.lazy(() => IncidentCreateNestedOneWithoutVehiclesInputSchema),
  vehicle: z.lazy(() => VehicleCreateNestedOneWithoutIncidentsInputSchema),
});

export default IncidentVehicleCreateWithoutIncidentStaffInputSchema;
