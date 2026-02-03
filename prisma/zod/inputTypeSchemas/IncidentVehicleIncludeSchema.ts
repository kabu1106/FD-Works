import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentArgsSchema } from "../outputTypeSchemas/IncidentArgsSchema"
import { VehicleArgsSchema } from "../outputTypeSchemas/VehicleArgsSchema"
import { IncidentStaffFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffFindManyArgsSchema"
import { IncidentVehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentVehicleCountOutputTypeArgsSchema"

export const IncidentVehicleIncludeSchema: z.ZodType<Prisma.IncidentVehicleInclude> = z.object({
  incident: z.union([z.boolean(),z.lazy(() => IncidentArgsSchema)]).optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => VehicleArgsSchema)]).optional(),
  IncidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentVehicleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentVehicleIncludeSchema;
