import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentVehicleCreateManyInputSchema: z.ZodType<Prisma.IncidentVehicleCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
});

export default IncidentVehicleCreateManyInputSchema;
