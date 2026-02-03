import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema } from './IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema';
import { DepartmentUpdateOneWithoutVehicleNestedInputSchema } from './DepartmentUpdateOneWithoutVehicleNestedInputSchema';

export const VehicleUpdateInputSchema: z.ZodType<Prisma.VehicleUpdateInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  incidents: z.lazy(() => IncidentVehicleUpdateManyWithoutVehicleNestedInputSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneWithoutVehicleNestedInputSchema).optional(),
});

export default VehicleUpdateInputSchema;
