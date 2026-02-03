import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';

export const OvertimeSummaryRelationFilterSchema: z.ZodType<Prisma.OvertimeSummaryRelationFilter> = z.strictObject({
  is: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
  isNot: z.lazy(() => OvertimeSummaryWhereInputSchema).optional(),
});

export default OvertimeSummaryRelationFilterSchema;
