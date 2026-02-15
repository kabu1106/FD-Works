import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DispatchedVehicleCreateManyIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateManyIncidentInput> = z.strictObject({
  id: z.number().int().optional(),
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
});

export default DispatchedVehicleCreateManyIncidentInputSchema;
