import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffCreateManyInputSchema } from '../inputTypeSchemas/WeeklyDayOffCreateManyInputSchema'

export const WeeklyDayOffCreateManyArgsSchema: z.ZodType<Prisma.WeeklyDayOffCreateManyArgs> = z.object({
  data: z.union([ WeeklyDayOffCreateManyInputSchema, WeeklyDayOffCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WeeklyDayOffCreateManyArgsSchema;
