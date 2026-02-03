import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUpdateManyMutationInputSchema'
import { IncidentAllowanceSummaryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryUncheckedUpdateManyInputSchema'
import { IncidentAllowanceSummaryWhereInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereInputSchema'

export const IncidentAllowanceSummaryUpdateManyArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateManyArgs> = z.object({
  data: z.union([ IncidentAllowanceSummaryUpdateManyMutationInputSchema, IncidentAllowanceSummaryUncheckedUpdateManyInputSchema ]),
  where: IncidentAllowanceSummaryWhereInputSchema.optional(), 
}).strict();

export default IncidentAllowanceSummaryUpdateManyArgsSchema;
