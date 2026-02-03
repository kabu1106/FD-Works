import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema';

export const VehicleUncheckedCreateInputSchema: z.ZodType<Prisma.VehicleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  departmentId: z.number().int().optional().nullable(),
  isActive: z.boolean().optional(),
  incidents: z.lazy(() => IncidentVehicleUncheckedCreateNestedManyWithoutVehicleInputSchema).optional(),
});

export default VehicleUncheckedCreateInputSchema;
