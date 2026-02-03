import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereInputSchema'

export const OvertimeSummaryDetailDeleteManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailDeleteManyArgs> = z.object({
  where: OvertimeSummaryDetailWhereInputSchema.optional(), 
}).strict();

export default OvertimeSummaryDetailDeleteManyArgsSchema;
