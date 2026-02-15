import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';

export const OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema), z.lazy(() => OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  startAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  endAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  minutes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  rateSnapshot: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default OvertimeSlotResolvedScalarWhereWithAggregatesInputSchema;
