import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryIncludeSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryIncludeSchema'
import { IncidentAllowanceSummaryCreateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryCreateInputSchema'
import { IncidentAllowanceSummaryUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUncheckedCreateInputSchema'
import { IncidentStaffArgsSchema } from "../outputTypeSchemas/IncidentStaffArgsSchema"
import { AllowanceTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const IncidentAllowanceSummaryCreateArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateArgs> = z.object({
  select: IncidentAllowanceSummarySelectSchema.optional(),
  include: z.lazy(() => IncidentAllowanceSummaryIncludeSchema).optional(),
  data: z.union([ IncidentAllowanceSummaryCreateInputSchema, IncidentAllowanceSummaryUncheckedCreateInputSchema ]),
}).strict();

export default IncidentAllowanceSummaryCreateArgsSchema;
