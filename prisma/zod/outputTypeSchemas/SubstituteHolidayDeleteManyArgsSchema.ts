import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayWhereInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereInputSchema'

export const SubstituteHolidayDeleteManyArgsSchema: z.ZodType<Prisma.SubstituteHolidayDeleteManyArgs> = z.object({
  where: SubstituteHolidayWhereInputSchema.optional(), 
}).strict();

export default SubstituteHolidayDeleteManyArgsSchema;
