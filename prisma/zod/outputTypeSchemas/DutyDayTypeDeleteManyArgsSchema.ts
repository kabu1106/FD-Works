import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeWhereInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereInputSchema'

export const DutyDayTypeDeleteManyArgsSchema: z.ZodType<Prisma.DutyDayTypeDeleteManyArgs> = z.object({
  where: DutyDayTypeWhereInputSchema.optional(), 
}).strict();

export default DutyDayTypeDeleteManyArgsSchema;
