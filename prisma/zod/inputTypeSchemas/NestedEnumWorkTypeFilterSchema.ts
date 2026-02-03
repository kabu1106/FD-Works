import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const NestedEnumWorkTypeFilterSchema: z.ZodType<Prisma.NestedEnumWorkTypeFilter> = z.strictObject({
  equals: z.lazy(() => WorkTypeSchema).optional(),
  in: z.lazy(() => WorkTypeSchema).array().optional(),
  notIn: z.lazy(() => WorkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkTypeSchema), z.lazy(() => NestedEnumWorkTypeFilterSchema) ]).optional(),
});

export default NestedEnumWorkTypeFilterSchema;
