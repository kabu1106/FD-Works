import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryIncludeSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryIncludeSchema'
import { IncidentAllowanceSummaryWhereInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereInputSchema'
import { IncidentAllowanceSummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryOrderByWithRelationInputSchema'
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereUniqueInputSchema'
import { IncidentAllowanceSummaryScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryScalarFieldEnumSchema'
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

export const IncidentAllowanceSummaryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryFindFirstOrThrowArgs> = z.object({
  select: IncidentAllowanceSummarySelectSchema.optional(),
  include: z.lazy(() => IncidentAllowanceSummaryIncludeSchema).optional(),
  where: IncidentAllowanceSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentAllowanceSummaryOrderByWithRelationInputSchema.array(), IncidentAllowanceSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentAllowanceSummaryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IncidentAllowanceSummaryScalarFieldEnumSchema, IncidentAllowanceSummaryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IncidentAllowanceSummaryFindFirstOrThrowArgsSchema;
