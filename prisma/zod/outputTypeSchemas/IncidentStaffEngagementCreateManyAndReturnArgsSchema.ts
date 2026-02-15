import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementCreateManyInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementCreateManyInputSchema'

export const IncidentStaffEngagementCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentStaffEngagementCreateManyInputSchema, IncidentStaffEngagementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentStaffEngagementCreateManyAndReturnArgsSchema;
