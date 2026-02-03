import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema } from './IncidentVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema';

export const VehicleUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.VehicleUncheckedUpdateWithoutDepartmentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  incidents: z.lazy(() => IncidentVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema).optional(),
});

export default VehicleUncheckedUpdateWithoutDepartmentInputSchema;
