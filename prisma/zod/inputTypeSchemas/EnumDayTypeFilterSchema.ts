import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DayTypeSchema } from './DayTypeSchema';
import { NestedEnumDayTypeFilterSchema } from './NestedEnumDayTypeFilterSchema';

export const EnumDayTypeFilterSchema: z.ZodType<Prisma.EnumDayTypeFilter> = z.strictObject({
  equals: z.lazy(() => DayTypeSchema).optional(),
  in: z.lazy(() => DayTypeSchema).array().optional(),
  notIn: z.lazy(() => DayTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DayTypeSchema), z.lazy(() => NestedEnumDayTypeFilterSchema) ]).optional(),
});

export default EnumDayTypeFilterSchema;
