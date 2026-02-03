import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeCreateManyInputSchema } from '../inputTypeSchemas/IncidentTypeCreateManyInputSchema'

export const IncidentTypeCreateManyArgsSchema: z.ZodType<Prisma.IncidentTypeCreateManyArgs> = z.object({
  data: z.union([ IncidentTypeCreateManyInputSchema, IncidentTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentTypeCreateManyArgsSchema;
