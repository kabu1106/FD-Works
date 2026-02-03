import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';

export const OvertimeSummaryListRelationFilterSchema: z.ZodType<Prisma.OvertimeSummaryListRelationFilter> = z.strictObject({
  every: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
  some: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
  none: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
});

export default OvertimeSummaryListRelationFilterSchema;
