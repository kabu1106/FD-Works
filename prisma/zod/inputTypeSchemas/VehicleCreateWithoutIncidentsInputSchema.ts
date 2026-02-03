import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutVehicleInputSchema } from './DepartmentCreateNestedOneWithoutVehicleInputSchema';

export const VehicleCreateWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleCreateWithoutIncidentsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutVehicleInputSchema).optional(),
});

export default VehicleCreateWithoutIncidentsInputSchema;
