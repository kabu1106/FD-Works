import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const WeeklyDayOffScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WeeklyDayOffScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WeeklyDayOffScalarWhereWithAggregatesInputSchema), z.lazy(() => WeeklyDayOffScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeeklyDayOffScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeeklyDayOffScalarWhereWithAggregatesInputSchema), z.lazy(() => WeeklyDayOffScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default WeeklyDayOffScalarWhereWithAggregatesInputSchema;
