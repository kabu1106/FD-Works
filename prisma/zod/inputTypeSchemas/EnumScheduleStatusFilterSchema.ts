import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';
import { NestedEnumScheduleStatusFilterSchema } from './NestedEnumScheduleStatusFilterSchema';

export const EnumScheduleStatusFilterSchema: z.ZodType<Prisma.EnumScheduleStatusFilter> = z.strictObject({
  equals: z.lazy(() => ScheduleStatusSchema).optional(),
  in: z.lazy(() => ScheduleStatusSchema).array().optional(),
  notIn: z.lazy(() => ScheduleStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ScheduleStatusSchema), z.lazy(() => NestedEnumScheduleStatusFilterSchema) ]).optional(),
});

export default EnumScheduleStatusFilterSchema;
