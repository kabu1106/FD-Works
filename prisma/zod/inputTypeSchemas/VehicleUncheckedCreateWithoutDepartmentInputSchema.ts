import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema';

export const VehicleUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutDepartmentInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  incidents: z.lazy(() => IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default VehicleUncheckedCreateWithoutDepartmentInputSchema;
