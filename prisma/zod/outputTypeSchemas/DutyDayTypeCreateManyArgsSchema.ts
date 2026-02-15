import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeCreateManyInputSchema } from '../inputTypeSchemas/DutyDayTypeCreateManyInputSchema'

export const DutyDayTypeCreateManyArgsSchema: z.ZodType<Prisma.DutyDayTypeCreateManyArgs> = z.object({
  data: z.union([ DutyDayTypeCreateManyInputSchema, DutyDayTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DutyDayTypeCreateManyArgsSchema;
