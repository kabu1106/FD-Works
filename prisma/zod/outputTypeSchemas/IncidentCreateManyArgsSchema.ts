import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCreateManyInputSchema } from '../inputTypeSchemas/IncidentCreateManyInputSchema'

export const IncidentCreateManyArgsSchema: z.ZodType<Prisma.IncidentCreateManyArgs> = z.object({
  data: z.union([ IncidentCreateManyInputSchema, IncidentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentCreateManyArgsSchema;
