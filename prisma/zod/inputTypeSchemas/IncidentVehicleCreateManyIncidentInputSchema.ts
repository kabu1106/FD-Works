import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentVehicleCreateManyIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleCreateManyIncidentInput> = z.strictObject({
  id: z.string().optional(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
});

export default IncidentVehicleCreateManyIncidentInputSchema;
