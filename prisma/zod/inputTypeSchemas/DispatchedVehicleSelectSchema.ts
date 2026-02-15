import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelArgsSchema } from "../outputTypeSchemas/IncidentReadModelArgsSchema"
import { StaffInVehicleFindManyArgsSchema } from "../outputTypeSchemas/StaffInVehicleFindManyArgsSchema"
import { DispatchedVehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/DispatchedVehicleCountOutputTypeArgsSchema"

export const DispatchedVehicleSelectSchema: z.ZodType<Prisma.DispatchedVehicleSelect> = z.object({
  id: z.boolean().optional(),
  incidentId: z.boolean().optional(),
  vehicleId: z.boolean().optional(),
  dispatchedAt: z.boolean().optional(),
  returnedAt: z.boolean().optional(),
  incident: z.union([z.boolean(),z.lazy(() => IncidentReadModelArgsSchema)]).optional(),
  staffs: z.union([z.boolean(),z.lazy(() => StaffInVehicleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DispatchedVehicleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DispatchedVehicleSelectSchema;
