import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentArgsSchema } from "../outputTypeSchemas/IncidentArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

export const IncidentStaffEngagementIncludeSchema: z.ZodType<Prisma.IncidentStaffEngagementInclude> = z.object({
  incident: z.union([z.boolean(),z.lazy(() => IncidentArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict();

export default IncidentStaffEngagementIncludeSchema;
