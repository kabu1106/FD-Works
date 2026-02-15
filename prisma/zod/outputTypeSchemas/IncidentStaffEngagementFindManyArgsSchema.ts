import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementIncludeSchema } from '../inputTypeSchemas/IncidentStaffEngagementIncludeSchema'
import { IncidentStaffEngagementWhereInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereInputSchema'
import { IncidentStaffEngagementOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementOrderByWithRelationInputSchema'
import { IncidentStaffEngagementWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereUniqueInputSchema'
import { IncidentStaffEngagementScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentStaffEngagementScalarFieldEnumSchema'
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

export const IncidentStaffEngagementFindManyArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementFindManyArgs> = z.object({
  select: IncidentStaffEngagementSelectSchema.optional(),
  include: z.lazy(() => IncidentStaffEngagementIncludeSchema).optional(),
  where: IncidentStaffEngagementWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffEngagementOrderByWithRelationInputSchema.array(), IncidentStaffEngagementOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentStaffEngagementWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IncidentStaffEngagementScalarFieldEnumSchema, IncidentStaffEngagementScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IncidentStaffEngagementFindManyArgsSchema;
