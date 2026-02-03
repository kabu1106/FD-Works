import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema } from './IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema';

export const VehicleUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUpdateWithoutDepartmentInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  incidents: z.lazy(() => IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema).optional(),
});

export default VehicleUpdateWithoutDepartmentInputSchema;
