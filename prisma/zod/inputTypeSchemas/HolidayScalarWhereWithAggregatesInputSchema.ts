import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const HolidayScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HolidayScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => HolidayScalarWhereWithAggregatesInputSchema), z.lazy(() => HolidayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HolidayScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HolidayScalarWhereWithAggregatesInputSchema), z.lazy(() => HolidayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export default HolidayScalarWhereWithAggregatesInputSchema;
