import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';

export const NestedEnumShiftTypeFilterSchema: z.ZodType<Prisma.NestedEnumShiftTypeFilter> = z.strictObject({
  equals: z.lazy(() => ShiftTypeSchema).optional(),
  in: z.lazy(() => ShiftTypeSchema).array().optional(),
  notIn: z.lazy(() => ShiftTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => NestedEnumShiftTypeFilterSchema) ]).optional(),
});

export default NestedEnumShiftTypeFilterSchema;
