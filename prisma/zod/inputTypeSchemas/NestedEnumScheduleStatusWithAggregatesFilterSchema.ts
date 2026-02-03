import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumScheduleStatusFilterSchema } from './NestedEnumScheduleStatusFilterSchema';

export const NestedEnumScheduleStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumScheduleStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ScheduleStatusSchema).optional(),
  in: z.lazy(() => ScheduleStatusSchema).array().optional(),
  notIn: z.lazy(() => ScheduleStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ScheduleStatusSchema), z.lazy(() => NestedEnumScheduleStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumScheduleStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumScheduleStatusFilterSchema).optional(),
});

export default NestedEnumScheduleStatusWithAggregatesFilterSchema;
