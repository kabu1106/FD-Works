import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IncidentReadModelRelationFilterSchema } from './IncidentReadModelRelationFilterSchema';
import { IncidentReadModelWhereInputSchema } from './IncidentReadModelWhereInputSchema';
import { StaffInVehicleListRelationFilterSchema } from './StaffInVehicleListRelationFilterSchema';

export const DispatchedVehicleWhereInputSchema: z.ZodType<Prisma.DispatchedVehicleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DispatchedVehicleWhereInputSchema), z.lazy(() => DispatchedVehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DispatchedVehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DispatchedVehicleWhereInputSchema), z.lazy(() => DispatchedVehicleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dispatchedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  returnedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  incident: z.union([ z.lazy(() => IncidentReadModelRelationFilterSchema), z.lazy(() => IncidentReadModelWhereInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffInVehicleListRelationFilterSchema).optional(),
});

export default DispatchedVehicleWhereInputSchema;
