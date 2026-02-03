import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VehicleCreateNestedOneWithoutIncidentsInputSchema } from './VehicleCreateNestedOneWithoutIncidentsInputSchema';
import { IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleCreateWithoutIncidentInput> = z.strictObject({
  id: z.string().optional(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  vehicle: z.lazy(() => VehicleCreateNestedOneWithoutIncidentsInputSchema),
  IncidentStaff: z.lazy(() => IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleCreateWithoutIncidentInputSchema;
