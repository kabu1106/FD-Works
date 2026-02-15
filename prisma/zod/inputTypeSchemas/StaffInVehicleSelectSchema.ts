import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleArgsSchema } from "../outputTypeSchemas/DispatchedVehicleArgsSchema"

export const StaffInVehicleSelectSchema: z.ZodType<Prisma.StaffInVehicleSelect> = z.object({
  id: z.boolean().optional(),
  dispatchedVehicleId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => DispatchedVehicleArgsSchema)]).optional(),
}).strict()

export default StaffInVehicleSelectSchema;
