import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentAllowanceSummarySelectSchema } from '../inputTypeSchemas/IncidentAllowanceSummarySelectSchema';
import { IncidentAllowanceSummaryIncludeSchema } from '../inputTypeSchemas/IncidentAllowanceSummaryIncludeSchema';

export const IncidentAllowanceSummaryArgsSchema: z.ZodType<Prisma.IncidentAllowanceSummaryDefaultArgs> = z.object({
  select: z.lazy(() => IncidentAllowanceSummarySelectSchema).optional(),
  include: z.lazy(() => IncidentAllowanceSummaryIncludeSchema).optional(),
}).strict();

export default IncidentAllowanceSummaryArgsSchema;
