import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';
import { NestedEnumLocationTypeFilterSchema } from './NestedEnumLocationTypeFilterSchema';

export const EnumLocationTypeFilterSchema: z.ZodType<Prisma.EnumLocationTypeFilter> = z.strictObject({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema), z.lazy(() => NestedEnumLocationTypeFilterSchema) ]).optional(),
});

export default EnumLocationTypeFilterSchema;
