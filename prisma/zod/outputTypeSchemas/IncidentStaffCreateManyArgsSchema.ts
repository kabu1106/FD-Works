import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffCreateManyInputSchema } from '../inputTypeSchemas/IncidentStaffCreateManyInputSchema'

export const IncidentStaffCreateManyArgsSchema: z.ZodType<Prisma.IncidentStaffCreateManyArgs> = z.object({
  data: z.union([ IncidentStaffCreateManyInputSchema, IncidentStaffCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentStaffCreateManyArgsSchema;
