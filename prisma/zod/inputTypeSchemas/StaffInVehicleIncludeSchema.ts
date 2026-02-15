import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleArgsSchema } from "../outputTypeSchemas/DispatchedVehicleArgsSchema"

export const StaffInVehicleIncludeSchema: z.ZodType<Prisma.StaffInVehicleInclude> = z.object({
  vehicle: z.union([z.boolean(),z.lazy(() => DispatchedVehicleArgsSchema)]).optional(),
}).strict();

export default StaffInVehicleIncludeSchema;
