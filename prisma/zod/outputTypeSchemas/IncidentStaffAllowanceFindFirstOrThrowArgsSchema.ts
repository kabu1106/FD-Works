import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceIncludeSchema } from '../inputTypeSchemas/IncidentStaffAllowanceIncludeSchema'
import { IncidentStaffAllowanceWhereInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereInputSchema'
import { IncidentStaffAllowanceOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceOrderByWithRelationInputSchema'
import { IncidentStaffAllowanceWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereUniqueInputSchema'
import { IncidentStaffAllowanceScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentStaffAllowanceScalarFieldEnumSchema'
import { IncidentStaffArgsSchema } from "../outputTypeSchemas/IncidentStaffArgsSchema"
import { AllowanceTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentStaffAllowanceSelectSchema: z.ZodType<Prisma.IncidentStaffAllowanceSelect> = z.object({
  id: z.boolean().optional(),
  incidentStaffId: z.boolean().optional(),
  allowanceTypeId: z.boolean().optional(),
  incidentStaff: z.union([z.boolean(),z.lazy(() => IncidentStaffArgsSchema)]).optional(),
  allowanceType: z.union([z.boolean(),z.lazy(() => AllowanceTypeArgsSchema)]).optional(),
}).strict()

export const IncidentStaffAllowanceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceFindFirstOrThrowArgs> = z.object({
  select: IncidentStaffAllowanceSelectSchema.optional(),
  include: z.lazy(() => IncidentStaffAllowanceIncludeSchema).optional(),
  where: IncidentStaffAllowanceWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffAllowanceOrderByWithRelationInputSchema.array(), IncidentStaffAllowanceOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentStaffAllowanceWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IncidentStaffAllowanceScalarFieldEnumSchema, IncidentStaffAllowanceScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IncidentStaffAllowanceFindFirstOrThrowArgsSchema;
