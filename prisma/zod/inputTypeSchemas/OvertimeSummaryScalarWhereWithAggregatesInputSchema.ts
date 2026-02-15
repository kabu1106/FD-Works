import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const OvertimeSummaryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OvertimeSummaryScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  calculationVersion: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  totalMinutes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  calculatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default OvertimeSummaryScalarWhereWithAggregatesInputSchema;
