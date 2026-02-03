import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumWorkTypeFilterSchema } from './NestedEnumWorkTypeFilterSchema';

export const NestedEnumWorkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWorkTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => WorkTypeSchema).optional(),
  in: z.lazy(() => WorkTypeSchema).array().optional(),
  notIn: z.lazy(() => WorkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => NestedEnumWorkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkTypeFilterSchema).optional(),
});

export default NestedEnumWorkTypeWithAggregatesFilterSchema;
