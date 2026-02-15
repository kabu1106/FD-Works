import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffWhereInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereInputSchema'

export const WeeklyDayOffDeleteManyArgsSchema: z.ZodType<Prisma.WeeklyDayOffDeleteManyArgs> = z.object({
  where: WeeklyDayOffWhereInputSchema.optional(), 
}).strict();

export default WeeklyDayOffDeleteManyArgsSchema;
