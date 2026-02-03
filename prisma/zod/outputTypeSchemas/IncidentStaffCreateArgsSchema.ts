import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffIncludeSchema } from '../inputTypeSchemas/IncidentStaffIncludeSchema'
import { IncidentStaffCreateInputSchema } from '../inputTypeSchemas/IncidentStaffCreateInputSchema'
import { IncidentStaffUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentStaffUncheckedCreateInputSchema'
import { IncidentVehicleArgsSchema } from "../outputTypeSchemas/IncidentVehicleArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { IncidentStaffAllowanceFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffAllowanceFindManyArgsSchema"
import { IncidentAllowanceSummaryFindManyArgsSchema } from "../outputTypeSchemas/IncidentAllowanceSummaryFindManyArgsSchema"
import { IncidentStaffCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentStaffCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentStaffSelectSchema: z.ZodType<Prisma.IncidentStaffSelect> = z.object({
  id: z.boolean().optional(),
  incidentVehicleId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  incidentVehicle: z.union([z.boolean(),z.lazy(() => IncidentVehicleArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  allowances: z.union([z.boolean(),z.lazy(() => IncidentStaffAllowanceFindManyArgsSchema)]).optional(),
  IncidentAllowanceSummary: z.union([z.boolean(),z.lazy(() => IncidentAllowanceSummaryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentStaffCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IncidentStaffCreateArgsSchema: z.ZodType<Prisma.IncidentStaffCreateArgs> = z.object({
  select: IncidentStaffSelectSchema.optional(),
  include: z.lazy(() => IncidentStaffIncludeSchema).optional(),
  data: z.union([ IncidentStaffCreateInputSchema, IncidentStaffUncheckedCreateInputSchema ]),
}).strict();

export default IncidentStaffCreateArgsSchema;
