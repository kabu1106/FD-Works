import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedManyWithoutVehicleInputSchema } from './IncidentVehicleCreateNestedManyWithoutVehicleInputSchema';

export const VehicleCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleCreateWithoutDepartmentInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  incidents: z.lazy(() => IncidentVehicleCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default VehicleCreateWithoutDepartmentInputSchema;
