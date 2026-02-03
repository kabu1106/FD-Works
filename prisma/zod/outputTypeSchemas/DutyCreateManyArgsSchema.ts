import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyCreateManyInputSchema } from '../inputTypeSchemas/DutyCreateManyInputSchema'

export const DutyCreateManyArgsSchema: z.ZodType<Prisma.DutyCreateManyArgs> = z.object({
  data: z.union([ DutyCreateManyInputSchema, DutyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DutyCreateManyArgsSchema;
