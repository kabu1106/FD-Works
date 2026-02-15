import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DispatchedVehicleListRelationFilterSchema } from './DispatchedVehicleListRelationFilterSchema';

export const IncidentReadModelWhereInputSchema: z.ZodType<Prisma.IncidentReadModelWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentReadModelWhereInputSchema), z.lazy(() => IncidentReadModelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentReadModelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentReadModelWhereInputSchema), z.lazy(() => IncidentReadModelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  locationId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  closedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  vehicles: z.lazy(() => DispatchedVehicleListRelationFilterSchema).optional(),
});

export default IncidentReadModelWhereInputSchema;
