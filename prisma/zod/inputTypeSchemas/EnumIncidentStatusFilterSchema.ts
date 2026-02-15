import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { NestedEnumIncidentStatusFilterSchema } from './NestedEnumIncidentStatusFilterSchema';

export const EnumIncidentStatusFilterSchema: z.ZodType<Prisma.EnumIncidentStatusFilter> = z.strictObject({
  equals: z.lazy(() => IncidentStatusSchema).optional(),
  in: z.lazy(() => IncidentStatusSchema).array().optional(),
  notIn: z.lazy(() => IncidentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => IncidentStatusSchema), z.lazy(() => NestedEnumIncidentStatusFilterSchema) ]).optional(),
});

export default EnumIncidentStatusFilterSchema;
