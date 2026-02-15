import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const IncidentReadModelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IncidentReadModelScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentReadModelScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentReadModelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentReadModelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentReadModelScalarWhereWithAggregatesInputSchema), z.lazy(() => IncidentReadModelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  locationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  closedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default IncidentReadModelScalarWhereWithAggregatesInputSchema;
