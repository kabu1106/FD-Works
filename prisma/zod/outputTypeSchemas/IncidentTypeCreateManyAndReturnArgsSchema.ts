import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeCreateManyInputSchema } from '../inputTypeSchemas/IncidentTypeCreateManyInputSchema'

export const IncidentTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentTypeCreateManyInputSchema, IncidentTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentTypeCreateManyAndReturnArgsSchema;
