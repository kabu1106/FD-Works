import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleIncludeSchema } from '../inputTypeSchemas/StaffInVehicleIncludeSchema'
import { StaffInVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereUniqueInputSchema'
import { DispatchedVehicleArgsSchema } from "../outputTypeSchemas/DispatchedVehicleArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffInVehicleSelectSchema: z.ZodType<Prisma.StaffInVehicleSelect> = z.object({
  id: z.boolean().optional(),
  dispatchedVehicleId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => DispatchedVehicleArgsSchema)]).optional(),
}).strict()

export const StaffInVehicleFindUniqueArgsSchema: z.ZodType<Prisma.StaffInVehicleFindUniqueArgs> = z.object({
  select: StaffInVehicleSelectSchema.optional(),
  include: z.lazy(() => StaffInVehicleIncludeSchema).optional(),
  where: StaffInVehicleWhereUniqueInputSchema, 
}).strict();

export default StaffInVehicleFindUniqueArgsSchema;
