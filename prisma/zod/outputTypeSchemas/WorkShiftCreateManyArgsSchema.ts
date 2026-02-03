import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftCreateManyInputSchema } from '../inputTypeSchemas/WorkShiftCreateManyInputSchema'

export const WorkShiftCreateManyArgsSchema: z.ZodType<Prisma.WorkShiftCreateManyArgs> = z.object({
  data: z.union([ WorkShiftCreateManyInputSchema, WorkShiftCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkShiftCreateManyArgsSchema;
