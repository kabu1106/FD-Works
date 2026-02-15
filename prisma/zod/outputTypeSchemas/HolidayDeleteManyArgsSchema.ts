import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereInputSchema } from '../inputTypeSchemas/HolidayWhereInputSchema'

export const HolidayDeleteManyArgsSchema: z.ZodType<Prisma.HolidayDeleteManyArgs> = z.object({
  where: HolidayWhereInputSchema.optional(), 
}).strict();

export default HolidayDeleteManyArgsSchema;
