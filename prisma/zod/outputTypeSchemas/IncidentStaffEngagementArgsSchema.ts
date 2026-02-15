import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementSelectSchema } from '../inputTypeSchemas/IncidentStaffEngagementSelectSchema';
import { IncidentStaffEngagementIncludeSchema } from '../inputTypeSchemas/IncidentStaffEngagementIncludeSchema';

export const IncidentStaffEngagementArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementDefaultArgs> = z.object({
  select: z.lazy(() => IncidentStaffEngagementSelectSchema).optional(),
  include: z.lazy(() => IncidentStaffEngagementIncludeSchema).optional(),
}).strict();

export default IncidentStaffEngagementArgsSchema;
