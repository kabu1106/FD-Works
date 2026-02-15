import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema';

export const DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleUncheckedCreateWithoutIncidentInput> = z.strictObject({
  id: z.number().int().optional(),
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
  staffs: z.lazy(() => StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema;
