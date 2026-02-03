import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleUncheckedCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateWithoutIncidentInput> = z.strictObject({
  id: z.string().optional(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleUncheckedCreateWithoutIncidentInputSchema;
