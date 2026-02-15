import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleIncludeSchema } from '../inputTypeSchemas/StaffInVehicleIncludeSchema'
import { StaffInVehicleCreateInputSchema } from '../inputTypeSchemas/StaffInVehicleCreateInputSchema'
import { StaffInVehicleUncheckedCreateInputSchema } from '../inputTypeSchemas/StaffInVehicleUncheckedCreateInputSchema'
import { DispatchedVehicleArgsSchema } from "../outputTypeSchemas/DispatchedVehicleArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffInVehicleSelectSchema: z.ZodType<Prisma.StaffInVehicleSelect> = z.object({
  id: z.boolean().optional(),
  dispatchedVehicleId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => DispatchedVehicleArgsSchema)]).optional(),
}).strict()

export const StaffInVehicleCreateArgsSchema: z.ZodType<Prisma.StaffInVehicleCreateArgs> = z.object({
  select: StaffInVehicleSelectSchema.optional(),
  include: z.lazy(() => StaffInVehicleIncludeSchema).optional(),
  data: z.union([ StaffInVehicleCreateInputSchema, StaffInVehicleUncheckedCreateInputSchema ]),
}).strict();

export default StaffInVehicleCreateArgsSchema;
