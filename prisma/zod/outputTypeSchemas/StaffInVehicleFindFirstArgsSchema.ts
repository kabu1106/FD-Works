import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleIncludeSchema } from '../inputTypeSchemas/StaffInVehicleIncludeSchema'
import { StaffInVehicleWhereInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereInputSchema'
import { StaffInVehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffInVehicleOrderByWithRelationInputSchema'
import { StaffInVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereUniqueInputSchema'
import { StaffInVehicleScalarFieldEnumSchema } from '../inputTypeSchemas/StaffInVehicleScalarFieldEnumSchema'
import { DispatchedVehicleArgsSchema } from "../outputTypeSchemas/DispatchedVehicleArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffInVehicleSelectSchema: z.ZodType<Prisma.StaffInVehicleSelect> = z.object({
  id: z.boolean().optional(),
  dispatchedVehicleId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => DispatchedVehicleArgsSchema)]).optional(),
}).strict()

export const StaffInVehicleFindFirstArgsSchema: z.ZodType<Prisma.StaffInVehicleFindFirstArgs> = z.object({
  select: StaffInVehicleSelectSchema.optional(),
  include: z.lazy(() => StaffInVehicleIncludeSchema).optional(),
  where: StaffInVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ StaffInVehicleOrderByWithRelationInputSchema.array(), StaffInVehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: StaffInVehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StaffInVehicleScalarFieldEnumSchema, StaffInVehicleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default StaffInVehicleFindFirstArgsSchema;
