import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceUpdateManyMutationInputSchema'
import { IncidentStaffAllowanceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceUncheckedUpdateManyInputSchema'
import { IncidentStaffAllowanceWhereInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereInputSchema'

export const IncidentStaffAllowanceUpdateManyArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyArgs> = z.object({
  data: z.union([ IncidentStaffAllowanceUpdateManyMutationInputSchema, IncidentStaffAllowanceUncheckedUpdateManyInputSchema ]),
  where: IncidentStaffAllowanceWhereInputSchema.optional(), 
}).strict();

export default IncidentStaffAllowanceUpdateManyArgsSchema;
