import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentArgsSchema } from "../outputTypeSchemas/IncidentArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

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

export default IncidentStaffEngagementSelectSchema;
