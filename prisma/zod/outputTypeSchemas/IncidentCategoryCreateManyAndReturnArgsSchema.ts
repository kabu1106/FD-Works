import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryCreateManyInputSchema } from '../inputTypeSchemas/IncidentCategoryCreateManyInputSchema'

export const IncidentCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentCategoryCreateManyInputSchema, IncidentCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentCategoryCreateManyAndReturnArgsSchema;
