import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';

export const NestedEnumLocationTypeFilterSchema: z.ZodType<Prisma.NestedEnumLocationTypeFilter> = z.strictObject({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema), z.lazy(() => NestedEnumLocationTypeFilterSchema) ]).optional(),
});

export default NestedEnumLocationTypeFilterSchema;
