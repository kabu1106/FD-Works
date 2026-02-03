import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleIncludeSchema } from '../inputTypeSchemas/IncidentVehicleIncludeSchema'
import { IncidentVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereUniqueInputSchema'
import { IncidentVehicleCreateInputSchema } from '../inputTypeSchemas/IncidentVehicleCreateInputSchema'
import { IncidentVehicleUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentVehicleUncheckedCreateInputSchema'
import { IncidentVehicleUpdateInputSchema } from '../inputTypeSchemas/IncidentVehicleUpdateInputSchema'
import { IncidentVehicleUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentVehicleUncheckedUpdateInputSchema'
import { IncidentArgsSchema } from "../outputTypeSchemas/IncidentArgsSchema"
import { VehicleArgsSchema } from "../outputTypeSchemas/VehicleArgsSchema"
import { IncidentStaffFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffFindManyArgsSchema"
import { IncidentVehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentVehicleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentVehicleSelectSchema: z.ZodType<Prisma.IncidentVehicleSelect> = z.object({
  id: z.boolean().optional(),
  incidentId: z.boolean().optional(),
  vehicleId: z.boolean().optional(),
  dispatchTime: z.boolean().optional(),
  returnTime: z.boolean().optional(),
  incident: z.union([z.boolean(),z.lazy(() => IncidentArgsSchema)]).optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => VehicleArgsSchema)]).optional(),
  IncidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentVehicleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IncidentVehicleUpsertArgsSchema: z.ZodType<Prisma.IncidentVehicleUpsertArgs> = z.object({
  select: IncidentVehicleSelectSchema.optional(),
  include: z.lazy(() => IncidentVehicleIncludeSchema).optional(),
  where: IncidentVehicleWhereUniqueInputSchema, 
  create: z.union([ IncidentVehicleCreateInputSchema, IncidentVehicleUncheckedCreateInputSchema ]),
  update: z.union([ IncidentVehicleUpdateInputSchema, IncidentVehicleUncheckedUpdateInputSchema ]),
}).strict();

export default IncidentVehicleUpsertArgsSchema;
