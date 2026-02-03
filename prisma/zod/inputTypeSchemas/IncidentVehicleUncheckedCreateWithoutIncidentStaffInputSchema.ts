import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
});

export default IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema;
