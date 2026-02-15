import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema } from './IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema';

export const DispatchedVehicleCreateWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateWithoutStaffsInput> = z.strictObject({
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().optional().nullable(),
  incident: z.lazy(() => IncidentReadModelCreateNestedOneWithoutVehiclesInputSchema),
});

export default DispatchedVehicleCreateWithoutStaffsInputSchema;
