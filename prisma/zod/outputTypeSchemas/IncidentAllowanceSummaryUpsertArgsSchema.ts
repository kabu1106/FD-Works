import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryIncludeSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryIncludeSchema'
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereUniqueInputSchema'
import { IncidentAllowanceSummaryCreateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryCreateInputSchema'
import { IncidentAllowanceSummaryUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUncheckedCreateInputSchema'
import { IncidentAllowanceSummaryUpdateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUpdateInputSchema'
import { IncidentAllowanceSummaryUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUncheckedUpdateInputSchema'
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

export const IncidentAllowanceSummaryUpsertArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpsertArgs> = z.object({
  select: IncidentAllowanceSummarySelectSchema.optional(),
  include: z.lazy(() => IncidentAllowanceSummaryIncludeSchema).optional(),
  where: IncidentAllowanceSummaryWhereUniqueInputSchema, 
  create: z.union([ IncidentAllowanceSummaryCreateInputSchema, IncidentAllowanceSummaryUncheckedCreateInputSchema ]),
  update: z.union([ IncidentAllowanceSummaryUpdateInputSchema, IncidentAllowanceSummaryUncheckedUpdateInputSchema ]),
}).strict();

export default IncidentAllowanceSummaryUpsertArgsSchema;
