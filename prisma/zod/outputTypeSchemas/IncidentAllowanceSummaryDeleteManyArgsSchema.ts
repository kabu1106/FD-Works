import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummaryWhereInputSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryWhereInputSchema'

export const IncidentAllowanceSummaryDeleteManyArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryDeleteManyArgs> = z.object({
  where: IncidentAllowanceSummaryWhereInputSchema.optional(), 
}).strict();

export default IncidentAllowanceSummaryDeleteManyArgsSchema;
