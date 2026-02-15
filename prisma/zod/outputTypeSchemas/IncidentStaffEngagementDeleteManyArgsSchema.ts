import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementWhereInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereInputSchema'

export const IncidentStaffEngagementDeleteManyArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementDeleteManyArgs> = z.object({
  where: IncidentStaffEngagementWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffEngagementDeleteManyArgsSchema;
