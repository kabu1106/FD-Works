import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereInputSchema } from './IncidentAllowanceSummaryWhereInputSchema';

export const IncidentAllowanceSummaryListRelationFilterSchema: z.ZodType<Prisma.IncidentAllowanceSummaryListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).optional(),
  some: z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).optional(),
  none: z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).optional(),
});

export default IncidentAllowanceSummaryListRelationFilterSchema;
