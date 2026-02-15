import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayCreateManyInputSchema } from '../inputTypeSchemas/HolidayCreateManyInputSchema'

export const HolidayCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HolidayCreateManyAndReturnArgs> = z.object({
  data: z.union([ HolidayCreateManyInputSchema, HolidayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HolidayCreateManyAndReturnArgsSchema;
