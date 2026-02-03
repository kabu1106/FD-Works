import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceCreateManyInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceCreateManyInputSchema'

export const IncidentStaffAllowanceCreateManyArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyArgs> = z.object({
  data: z.union([ IncidentStaffAllowanceCreateManyInputSchema, IncidentStaffAllowanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentStaffAllowanceCreateManyArgsSchema;
