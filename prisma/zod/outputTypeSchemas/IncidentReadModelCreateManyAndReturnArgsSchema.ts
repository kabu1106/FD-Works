import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelCreateManyInputSchema } from '../inputTypeSchemas/IncidentReadModelCreateManyInputSchema'

export const IncidentReadModelCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentReadModelCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentReadModelCreateManyInputSchema, IncidentReadModelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentReadModelCreateManyAndReturnArgsSchema;
