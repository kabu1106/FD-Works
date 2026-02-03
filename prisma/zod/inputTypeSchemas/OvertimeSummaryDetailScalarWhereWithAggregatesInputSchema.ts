import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';

export const OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  overtimeSummaryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  minutes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export default OvertimeSummaryDetailScalarWhereWithAggregatesInputSchema;
