import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayCreateManyInputSchema } from '../inputTypeSchemas/SubstituteHolidayCreateManyInputSchema'

export const SubstituteHolidayCreateManyArgsSchema: z.ZodType<Prisma.SubstituteHolidayCreateManyArgs> = z.object({
  data: z.union([ SubstituteHolidayCreateManyInputSchema, SubstituteHolidayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SubstituteHolidayCreateManyArgsSchema;
