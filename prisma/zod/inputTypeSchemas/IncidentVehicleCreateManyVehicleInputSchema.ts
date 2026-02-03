import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentVehicleCreateManyVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleCreateManyVehicleInput> = z.strictObject({
  id: z.string().optional(),
  incidentId: z.string(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
});

export default IncidentVehicleCreateManyVehicleInputSchema;
