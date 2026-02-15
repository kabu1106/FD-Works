import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeCreateManyInputSchema } from '../inputTypeSchemas/DutyDayTypeCreateManyInputSchema'

export const DutyDayTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DutyDayTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ DutyDayTypeCreateManyInputSchema, DutyDayTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DutyDayTypeCreateManyAndReturnArgsSchema;
