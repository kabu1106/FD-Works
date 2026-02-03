import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedOneWithoutVehiclesInputSchema } from './IncidentCreateNestedOneWithoutVehiclesInputSchema';
import { VehicleCreateNestedOneWithoutIncidentsInputSchema } from './VehicleCreateNestedOneWithoutIncidentsInputSchema';
import { IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleCreateInputSchema: z.ZodType<Prisma.IncidentVehicleCreateInput> = z.strictObject({
  id: z.string().optional(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  incident: z.lazy(() => IncidentCreateNestedOneWithoutVehiclesInputSchema),
  vehicle: z.lazy(() => VehicleCreateNestedOneWithoutIncidentsInputSchema),
  IncidentStaff: z.lazy(() => IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleCreateInputSchema;
