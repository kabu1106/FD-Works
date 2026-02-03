import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereInputSchema'

export const OvertimeSummaryDeleteManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryDeleteManyArgs> = z.object({
  where: OvertimeSummaryWhereInputSchema.optional(), 
}).strict();

export default OvertimeSummaryDeleteManyArgsSchema;
