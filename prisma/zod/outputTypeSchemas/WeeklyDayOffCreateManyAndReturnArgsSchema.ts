import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffCreateManyInputSchema } from '../inputTypeSchemas/WeeklyDayOffCreateManyInputSchema'

export const WeeklyDayOffCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WeeklyDayOffCreateManyAndReturnArgs> = z.object({
  data: z.union([ WeeklyDayOffCreateManyInputSchema, WeeklyDayOffCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WeeklyDayOffCreateManyAndReturnArgsSchema;
