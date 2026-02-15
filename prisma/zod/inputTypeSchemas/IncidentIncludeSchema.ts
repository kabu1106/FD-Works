import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { IncidentCategoryArgsSchema } from "../outputTypeSchemas/IncidentCategoryArgsSchema"
import { IncidentTypeArgsSchema } from "../outputTypeSchemas/IncidentTypeArgsSchema"
import { LocationArgsSchema } from "../outputTypeSchemas/LocationArgsSchema"
import { HospitalArgsSchema } from "../outputTypeSchemas/HospitalArgsSchema"
import { IncidentVehicleFindManyArgsSchema } from "../outputTypeSchemas/IncidentVehicleFindManyArgsSchema"
import { IncidentStaffEngagementFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffEngagementFindManyArgsSchema"
import { IncidentCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentCountOutputTypeArgsSchema"

export const IncidentIncludeSchema: z.ZodType<Prisma.IncidentInclude> = z.object({
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => IncidentCategoryArgsSchema)]).optional(),
  type: z.union([z.boolean(),z.lazy(() => IncidentTypeArgsSchema)]).optional(),
  location: z.union([z.boolean(),z.lazy(() => LocationArgsSchema)]).optional(),
  destination: z.union([z.boolean(),z.lazy(() => HospitalArgsSchema)]).optional(),
  vehicles: z.union([z.boolean(),z.lazy(() => IncidentVehicleFindManyArgsSchema)]).optional(),
  incidentStaffEngagements: z.union([z.boolean(),z.lazy(() => IncidentStaffEngagementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentIncludeSchema;
