import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffArgsSchema } from "../outputTypeSchemas/IncidentStaffArgsSchema"
import { AllowanceTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeArgsSchema"

export const IncidentAllowanceSummarySelectSchema: z.ZodType<Prisma.IncidentAllowanceSummarySelect> = z.object({
  id: z.boolean().optional(),
  incidentStaffId: z.boolean().optional(),
  allowanceTypeId: z.boolean().optional(),
  version: z.boolean().optional(),
  count: z.boolean().optional(),
  isFinalized: z.boolean().optional(),
  incidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffArgsSchema)]).optional(),
  allowanceType: z.union([z.boolean(),z.lazy(() => AllowanceTypeArgsSchema)]).optional(),
}).strict()

export default IncidentAllowanceSummarySelectSchema;
