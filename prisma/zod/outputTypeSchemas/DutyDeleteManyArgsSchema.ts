import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyWhereInputSchema } from '../inputTypeSchemas/DutyWhereInputSchema'

export const DutyDeleteManyArgsSchema: z.ZodType<Prisma.DutyDeleteManyArgs> = z.object({
  where: DutyWhereInputSchema.optional(), 
}).strict();

export default DutyDeleteManyArgsSchema;
