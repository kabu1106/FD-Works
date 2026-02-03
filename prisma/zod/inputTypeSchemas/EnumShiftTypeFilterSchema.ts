import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { NestedEnumShiftTypeFilterSchema } from './NestedEnumShiftTypeFilterSchema';

export const EnumShiftTypeFilterSchema: z.ZodType<Prisma.EnumShiftTypeFilter> = z.strictObject({
  equals: z.lazy(() => ShiftTypeSchema).optional(),
  in: z.lazy(() => ShiftTypeSchema).array().optional(),
  notIn: z.lazy(() => ShiftTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => NestedEnumShiftTypeFilterSchema) ]).optional(),
});

export default EnumShiftTypeFilterSchema;
