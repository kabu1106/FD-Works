import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffArgsSchema } from "../outputTypeSchemas/IncidentStaffArgsSchema"
import { AllowanceTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeArgsSchema"

export const IncidentAllowanceSummaryIncludeSchema: z.ZodType<Prisma.IncidentAllowanceSummaryInclude> = z.object({
  incidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffArgsSchema)]).optional(),
  allowanceType: z.union([z.boolean(),z.lazy(() => AllowanceTypeArgsSchema)]).optional(),
}).strict();

export default IncidentAllowanceSummaryIncludeSchema;
