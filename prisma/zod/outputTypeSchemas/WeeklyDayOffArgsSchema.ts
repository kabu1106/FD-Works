import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffSelectSchema } from '../inputTypeSchemas/WeeklyDayOffSelectSchema';
import { WeeklyDayOffIncludeSchema } from '../inputTypeSchemas/WeeklyDayOffIncludeSchema';

export const WeeklyDayOffArgsSchema: z.ZodType<Prisma.WeeklyDayOffDefaultArgs> = z.object({
  select: z.lazy(() => WeeklyDayOffSelectSchema).optional(),
  include: z.lazy(() => WeeklyDayOffIncludeSchema).optional(),
}).strict();

export default WeeklyDayOffArgsSchema;
