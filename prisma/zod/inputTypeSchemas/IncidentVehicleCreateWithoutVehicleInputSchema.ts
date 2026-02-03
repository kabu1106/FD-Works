import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedOneWithoutVehiclesInputSchema } from './IncidentCreateNestedOneWithoutVehiclesInputSchema';
import { IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema';

export const IncidentVehicleCreateWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleCreateWithoutVehicleInput> = z.strictObject({
  id: z.string().optional(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
  incident: z.lazy(() => IncidentCreateNestedOneWithoutVehiclesInputSchema),
  IncidentStaff: z.lazy(() => IncidentStaffCreateNestedManyWithoutIncidentVehicleInputSchema).optional(),
});

export default IncidentVehicleCreateWithoutVehicleInputSchema;
