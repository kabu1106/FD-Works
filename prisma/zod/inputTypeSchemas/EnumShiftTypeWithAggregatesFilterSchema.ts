import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShiftTypeSchema } from './ShiftTypeSchema';
import { NestedEnumShiftTypeWithAggregatesFilterSchema } from './NestedEnumShiftTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumShiftTypeFilterSchema } from './NestedEnumShiftTypeFilterSchema';

export const EnumShiftTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumShiftTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ShiftTypeSchema).optional(),
  in: z.lazy(() => ShiftTypeSchema).array().optional(),
  notIn: z.lazy(() => ShiftTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ShiftTypeSchema), z.lazy(() => NestedEnumShiftTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumShiftTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumShiftTypeFilterSchema).optional(),
});

export default EnumShiftTypeWithAggregatesFilterSchema;
