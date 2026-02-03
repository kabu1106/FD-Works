import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryCreateManyInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryCreateManyInputSchema'

export const IncidentAllowanceSummaryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentAllowanceSummaryCreateManyInputSchema, IncidentAllowanceSummaryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentAllowanceSummaryCreateManyAndReturnArgsSchema;
