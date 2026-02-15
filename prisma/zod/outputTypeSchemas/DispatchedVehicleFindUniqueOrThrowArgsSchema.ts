import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleIncludeSchema } from '../inputTypeSchemas/DispatchedVehicleIncludeSchema'
import { DispatchedVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereUniqueInputSchema'
import { IncidentReadModelArgsSchema } from "../outputTypeSchemas/IncidentReadModelArgsSchema"
import { StaffInVehicleFindManyArgsSchema } from "../outputTypeSchemas/StaffInVehicleFindManyArgsSchema"
import { DispatchedVehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/DispatchedVehicleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DispatchedVehicleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DispatchedVehicleFindUniqueOrThrowArgs> = z.object({
  select: DispatchedVehicleSelectSchema.optional(),
  include: z.lazy(() => DispatchedVehicleIncludeSchema).optional(),
  where: DispatchedVehicleWhereUniqueInputSchema, 
}).strict();

export default DispatchedVehicleFindUniqueOrThrowArgsSchema;
