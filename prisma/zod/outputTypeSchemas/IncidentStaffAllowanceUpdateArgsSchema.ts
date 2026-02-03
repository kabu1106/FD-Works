import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceIncludeSchema } from '../inputTypeSchemas/IncidentStaffAllowanceIncludeSchema'
import { IncidentStaffAllowanceUpdateInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceUpdateInputSchema'
import { IncidentStaffAllowanceUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceUncheckedUpdateInputSchema'
import { IncidentStaffAllowanceWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereUniqueInputSchema'
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

export const IncidentStaffAllowanceUpdateArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateArgs> = z.object({
  select: IncidentStaffAllowanceSelectSchema.optional(),
  include: z.lazy(() => IncidentStaffAllowanceIncludeSchema).optional(),
  data: z.union([ IncidentStaffAllowanceUpdateInputSchema, IncidentStaffAllowanceUncheckedUpdateInputSchema ]),
  where: IncidentStaffAllowanceWhereUniqueInputSchema, 
}).strict();

export default IncidentStaffAllowanceUpdateArgsSchema;
