import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentStaffUpdateManyMutationInputSchema'
import { IncidentStaffUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentStaffUncheckedUpdateManyInputSchema'
import { IncidentStaffWhereInputSchema } from '../inputTypeSchemas/IncidentStaffWhereInputSchema'

export const IncidentStaffUpdateManyArgsSchema: z.ZodType<Prisma.IncidentStaffUpdateManyArgs> = z.object({
  data: z.union([ IncidentStaffUpdateManyMutationInputSchema, IncidentStaffUncheckedUpdateManyInputSchema ]),
  where: IncidentStaffWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffUpdateManyArgsSchema;
