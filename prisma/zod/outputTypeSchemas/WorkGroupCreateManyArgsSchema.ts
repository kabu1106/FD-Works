import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupCreateManyInputSchema } from '../inputTypeSchemas/WorkGroupCreateManyInputSchema'

export const WorkGroupCreateManyArgsSchema: z.ZodType<Prisma.WorkGroupCreateManyArgs> = z.object({
  data: z.union([ WorkGroupCreateManyInputSchema, WorkGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkGroupCreateManyArgsSchema;
