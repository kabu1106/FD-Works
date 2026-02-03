import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupCreateManyInputSchema } from '../inputTypeSchemas/WorkGroupCreateManyInputSchema'

export const WorkGroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WorkGroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ WorkGroupCreateManyInputSchema, WorkGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkGroupCreateManyAndReturnArgsSchema;
