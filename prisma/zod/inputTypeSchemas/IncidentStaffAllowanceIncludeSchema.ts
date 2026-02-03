import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffArgsSchema } from "../outputTypeSchemas/IncidentStaffArgsSchema"
import { AllowanceTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeArgsSchema"

export const IncidentStaffAllowanceIncludeSchema: z.ZodType<Prisma.IncidentStaffAllowanceInclude> = z.object({
  incidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffArgsSchema)]).optional(),
  allowanceType: z.union([z.boolean(),z.lazy(() => AllowanceTypeArgsSchema)]).optional(),
}).strict();

export default IncidentStaffAllowanceIncludeSchema;
