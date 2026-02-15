import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const DispatchedVehicleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DispatchedVehicleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DispatchedVehicleScalarWhereWithAggregatesInputSchema), z.lazy(() => DispatchedVehicleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DispatchedVehicleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DispatchedVehicleScalarWhereWithAggregatesInputSchema), z.lazy(() => DispatchedVehicleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  dispatchedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  returnedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default DispatchedVehicleScalarWhereWithAggregatesInputSchema;
