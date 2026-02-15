import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleUncheckedCreateWithoutStaffsInput> = z.strictObject({
  id: z.number().int().optional(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
});

export default DispatchedVehicleUncheckedCreateWithoutStaffsInputSchema;
