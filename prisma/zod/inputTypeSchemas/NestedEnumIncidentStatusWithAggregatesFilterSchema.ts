import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumIncidentStatusFilterSchema } from './NestedEnumIncidentStatusFilterSchema';

export const NestedEnumIncidentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumIncidentStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => IncidentStatusSchema).optional(),
  in: z.lazy(() => IncidentStatusSchema).array().optional(),
  notIn: z.lazy(() => IncidentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => IncidentStatusSchema), z.lazy(() => NestedEnumIncidentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumIncidentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumIncidentStatusFilterSchema).optional(),
});

export default NestedEnumIncidentStatusWithAggregatesFilterSchema;
