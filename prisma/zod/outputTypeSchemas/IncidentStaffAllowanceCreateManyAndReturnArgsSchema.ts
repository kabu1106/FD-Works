import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceCreateManyInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceCreateManyInputSchema'

export const IncidentStaffAllowanceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentStaffAllowanceCreateManyInputSchema, IncidentStaffAllowanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentStaffAllowanceCreateManyAndReturnArgsSchema;
