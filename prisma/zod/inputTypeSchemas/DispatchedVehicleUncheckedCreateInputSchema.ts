import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema } from './StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema';

export const DispatchedVehicleUncheckedCreateInputSchema: z.ZodType<Prisma.DispatchedVehicleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
  staffs: z.lazy(() => StaffInVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default DispatchedVehicleUncheckedCreateInputSchema;
