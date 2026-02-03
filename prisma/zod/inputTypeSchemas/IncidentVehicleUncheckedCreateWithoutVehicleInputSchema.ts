import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleUncheckedCreateWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateWithoutVehicleInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleUncheckedCreateWithoutVehicleInputSchema;
