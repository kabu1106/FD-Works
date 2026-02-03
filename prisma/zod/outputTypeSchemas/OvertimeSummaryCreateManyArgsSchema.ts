import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryCreateManyInputSchema } from '../inputTypeSchemas/OvertimeSummaryCreateManyInputSchema'

export const OvertimeSummaryCreateManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyArgs> = z.object({
  data: z.union([ OvertimeSummaryCreateManyInputSchema, OvertimeSummaryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeSummaryCreateManyArgsSchema;
