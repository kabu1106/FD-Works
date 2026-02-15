import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffUpdateManyMutationInputSchema } from '../inputTypeSchemas/WeeklyDayOffUpdateManyMutationInputSchema'
import { WeeklyDayOffUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WeeklyDayOffUncheckedUpdateManyInputSchema'
import { WeeklyDayOffWhereInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereInputSchema'

export const WeeklyDayOffUpdateManyArgsSchema: z.ZodType<Prisma.WeeklyDayOffUpdateManyArgs> = z.object({
  data: z.union([ WeeklyDayOffUpdateManyMutationInputSchema, WeeklyDayOffUncheckedUpdateManyInputSchema ]),
  where: WeeklyDayOffWhereInputSchema.optional(), 
}).strict();

export default WeeklyDayOffUpdateManyArgsSchema;
