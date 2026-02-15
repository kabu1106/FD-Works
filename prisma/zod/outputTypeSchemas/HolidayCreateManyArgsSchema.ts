import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayCreateManyInputSchema } from '../inputTypeSchemas/HolidayCreateManyInputSchema'

export const HolidayCreateManyArgsSchema: z.ZodType<Prisma.HolidayCreateManyArgs> = z.object({
  data: z.union([ HolidayCreateManyInputSchema, HolidayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HolidayCreateManyArgsSchema;
