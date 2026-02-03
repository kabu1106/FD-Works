import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedManyWithoutVehicleInputSchema } from './IncidentVehicleCreateNestedManyWithoutVehicleInputSchema';
import { DepartmentCreateNestedOneWithoutVehicleInputSchema } from './DepartmentCreateNestedOneWithoutVehicleInputSchema';

export const VehicleCreateInputSchema: z.ZodType<Prisma.VehicleCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  incidents: z.lazy(() => IncidentVehicleCreateNestedManyWithoutVehicleInputSchema).optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutVehicleInputSchema).optional(),
});

export default VehicleCreateInputSchema;
