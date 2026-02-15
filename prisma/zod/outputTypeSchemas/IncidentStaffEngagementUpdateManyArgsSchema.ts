import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementUpdateManyMutationInputSchema'
import { IncidentStaffEngagementUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementUncheckedUpdateManyInputSchema'
import { IncidentStaffEngagementWhereInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereInputSchema'

export const IncidentStaffEngagementUpdateManyArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateManyArgs> = z.object({
  data: z.union([ IncidentStaffEngagementUpdateManyMutationInputSchema, IncidentStaffEngagementUncheckedUpdateManyInputSchema ]),
  where: IncidentStaffEngagementWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffEngagementUpdateManyArgsSchema;
