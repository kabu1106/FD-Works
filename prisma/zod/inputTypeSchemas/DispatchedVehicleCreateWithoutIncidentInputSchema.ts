import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleCreateNestedManyWithoutVehicleInputSchema } from './StaffInVehicleCreateNestedManyWithoutVehicleInputSchema';

export const DispatchedVehicleCreateWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateWithoutIncidentInput> = z.strictObject({
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
  staffs: z.lazy(() => StaffInVehicleCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default DispatchedVehicleCreateWithoutIncidentInputSchema;
