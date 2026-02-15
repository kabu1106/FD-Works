import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayUpdateManyMutationInputSchema } from '../inputTypeSchemas/HolidayUpdateManyMutationInputSchema'
import { HolidayUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HolidayUncheckedUpdateManyInputSchema'
import { HolidayWhereInputSchema } from '../inputTypeSchemas/HolidayWhereInputSchema'

export const HolidayUpdateManyArgsSchema: z.ZodType<Prisma.HolidayUpdateManyArgs> = z.object({
  data: z.union([ HolidayUpdateManyMutationInputSchema, HolidayUncheckedUpdateManyInputSchema ]),
  where: HolidayWhereInputSchema.optional(), 
}).strict();

export default HolidayUpdateManyArgsSchema;
