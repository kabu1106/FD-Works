import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailCreateManyInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailCreateManyInputSchema'

export const OvertimeSummaryDetailCreateManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateManyArgs> = z.object({
  data: z.union([ OvertimeSummaryDetailCreateManyInputSchema, OvertimeSummaryDetailCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeSummaryDetailCreateManyArgsSchema;
