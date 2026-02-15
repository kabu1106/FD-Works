import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema } from './IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema';
import { StaffInVehicleCreateNestedManyWithoutVehicleInputSchema } from './StaffInVehicleCreateNestedManyWithoutVehicleInputSchema';

export const DispatchedVehicleCreateInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateInput> = z.strictObject({
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
  incident: z.lazy(() => IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema),
  staffs: z.lazy(() => StaffInVehicleCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default DispatchedVehicleCreateInputSchema;
