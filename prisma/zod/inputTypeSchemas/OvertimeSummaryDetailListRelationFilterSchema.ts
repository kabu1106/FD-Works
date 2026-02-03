import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailWhereInputSchema } from './OvertimeSummaryDetailWhereInputSchema';

export const OvertimeSummaryDetailListRelationFilterSchema: z.ZodType<Prisma.OvertimeSummaryDetailListRelationFilter> = z.strictObject({
  every: z.lazy(() => OvertimeSummaryDetailWhereInputSchema).optional(),
  some: z.lazy(() => OvertimeSummaryDetailWhereInputSchema).optional(),
  none: z.lazy(() => OvertimeSummaryDetailWhereInputSchema).optional(),
});

export default OvertimeSummaryDetailListRelationFilterSchema;
