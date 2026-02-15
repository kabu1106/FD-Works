import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementIncludeSchema } from '../inputTypeSchemas/IncidentStaffEngagementIncludeSchema'
import { IncidentStaffEngagementWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereUniqueInputSchema'
import { IncidentStaffEngagementCreateInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementCreateInputSchema'
import { IncidentStaffEngagementUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementUncheckedCreateInputSchema'
import { IncidentStaffEngagementUpdateInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementUpdateInputSchema'
import { IncidentStaffEngagementUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementUncheckedUpdateInputSchema'
import { IncidentArgsSchema } from "../outputTypeSchemas/IncidentArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentStaffEngagementSelectSchema: z.ZodType<Prisma.IncidentStaffEngagementSelect> = z.object({
  id: z.boolean().optional(),
  incidentId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  engagedFrom: z.boolean().optional(),
  engagedTo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  incident: z.union([z.boolean(),z.lazy(() => IncidentArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const IncidentStaffEngagementUpsertArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementUpsertArgs> = z.object({
  select: IncidentStaffEngagementSelectSchema.optional(),
  include: z.lazy(() => IncidentStaffEngagementIncludeSchema).optional(),
  where: IncidentStaffEngagementWhereUniqueInputSchema, 
  create: z.union([ IncidentStaffEngagementCreateInputSchema, IncidentStaffEngagementUncheckedCreateInputSchema ]),
  update: z.union([ IncidentStaffEngagementUpdateInputSchema, IncidentStaffEngagementUncheckedUpdateInputSchema ]),
}).strict();

export default IncidentStaffEngagementUpsertArgsSchema;
