import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumDayTypeFilterSchema } from './NestedEnumDayTypeFilterSchema';

export const NestedEnumDayTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDayTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => DayTypeSchema).optional(),
  in: z.lazy(() => DayTypeSchema).array().optional(),
  notIn: z.lazy(() => DayTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DayTypeSchema), z.lazy(() => NestedEnumDayTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDayTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDayTypeFilterSchema).optional(),
});

export default NestedEnumDayTypeWithAggregatesFilterSchema;
