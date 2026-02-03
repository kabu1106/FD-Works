import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleArgsSchema } from "../outputTypeSchemas/IncidentVehicleArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { IncidentStaffAllowanceFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffAllowanceFindManyArgsSchema"
import { IncidentAllowanceSummaryFindManyArgsSchema } from "../outputTypeSchemas/IncidentAllowanceSummaryFindManyArgsSchema"
import { IncidentStaffCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentStaffCountOutputTypeArgsSchema"

export const IncidentStaffIncludeSchema: z.ZodType<Prisma.IncidentStaffInclude> = z.object({
  incidentVehicle: z.union([z.boolean(),z.lazy(() => IncidentVehicleArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  allowances: z.union([z.boolean(),z.lazy(() => IncidentStaffAllowanceFindManyArgsSchema)]).optional(),
  IncidentAllowanceSummary: z.union([z.boolean(),z.lazy(() => IncidentAllowanceSummaryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentStaffCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentStaffIncludeSchema;
