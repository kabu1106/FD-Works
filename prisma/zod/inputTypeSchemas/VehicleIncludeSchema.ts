import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleFindManyArgsSchema } from "../outputTypeSchemas/IncidentVehicleFindManyArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { VehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/VehicleCountOutputTypeArgsSchema"

export const VehicleIncludeSchema: z.ZodType<Prisma.VehicleInclude> = z.object({
  incidents: z.union([z.boolean(),z.lazy(() => IncidentVehicleFindManyArgsSchema)]).optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VehicleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default VehicleIncludeSchema;
