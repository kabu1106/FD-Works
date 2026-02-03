import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryCreateManyInputSchema } from '../inputTypeSchemas/OvertimeSummaryCreateManyInputSchema'

export const OvertimeSummaryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyAndReturnArgs> = z.object({
  data: z.union([ OvertimeSummaryCreateManyInputSchema, OvertimeSummaryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OvertimeSummaryCreateManyAndReturnArgsSchema;
