import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleIncludeSchema } from '../inputTypeSchemas/DispatchedVehicleIncludeSchema'
import { DispatchedVehicleWhereInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereInputSchema'
import { DispatchedVehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/DispatchedVehicleOrderByWithRelationInputSchema'
import { DispatchedVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereUniqueInputSchema'
import { DispatchedVehicleScalarFieldEnumSchema } from '../inputTypeSchemas/DispatchedVehicleScalarFieldEnumSchema'
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

export const DispatchedVehicleFindFirstArgsSchema: z.ZodType<Prisma.DispatchedVehicleFindFirstArgs> = z.object({
  select: DispatchedVehicleSelectSchema.optional(),
  include: z.lazy(() => DispatchedVehicleIncludeSchema).optional(),
  where: DispatchedVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ DispatchedVehicleOrderByWithRelationInputSchema.array(), DispatchedVehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: DispatchedVehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DispatchedVehicleScalarFieldEnumSchema, DispatchedVehicleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default DispatchedVehicleFindFirstArgsSchema;
