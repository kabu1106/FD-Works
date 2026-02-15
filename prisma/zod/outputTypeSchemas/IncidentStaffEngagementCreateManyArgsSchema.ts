import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementCreateManyInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementCreateManyInputSchema'

export const IncidentStaffEngagementCreateManyArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyArgs> = z.object({
  data: z.union([ IncidentStaffEngagementCreateManyInputSchema, IncidentStaffEngagementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentStaffEngagementCreateManyArgsSchema;
