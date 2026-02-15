import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const DispatchedVehicleScalarWhereInputSchema: z.ZodType<Prisma.DispatchedVehicleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DispatchedVehicleScalarWhereInputSchema), z.lazy(() => DispatchedVehicleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DispatchedVehicleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DispatchedVehicleScalarWhereInputSchema), z.lazy(() => DispatchedVehicleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dispatchedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  returnedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default DispatchedVehicleScalarWhereInputSchema;
