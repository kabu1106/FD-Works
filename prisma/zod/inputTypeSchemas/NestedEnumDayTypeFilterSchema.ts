import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';

export const NestedEnumDayTypeFilterSchema: z.ZodType<Prisma.NestedEnumDayTypeFilter> = z.strictObject({
  equals: z.lazy(() => DayTypeSchema).optional(),
  in: z.lazy(() => DayTypeSchema).array().optional(),
  notIn: z.lazy(() => DayTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DayTypeSchema), z.lazy(() => NestedEnumDayTypeFilterSchema) ]).optional(),
});

export default NestedEnumDayTypeFilterSchema;
