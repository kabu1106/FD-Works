import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyCreateManyInputSchema } from '../inputTypeSchemas/DutyCreateManyInputSchema'

export const DutyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DutyCreateManyAndReturnArgs> = z.object({
  data: z.union([ DutyCreateManyInputSchema, DutyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DutyCreateManyAndReturnArgsSchema;
