import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleUncheckedCreateInputSchema;
