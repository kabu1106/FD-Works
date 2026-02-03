import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneWithoutVehicleNestedInputSchema } from './DepartmentUpdateOneWithoutVehicleNestedInputSchema';

export const VehicleUpdateWithoutIncidentsInputSchema: z.ZodType<Prisma.VehicleUpdateWithoutIncidentsInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneWithoutVehicleNestedInputSchema).optional(),
});

export default VehicleUpdateWithoutIncidentsInputSchema;
