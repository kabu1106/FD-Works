import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema } from './DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema';
import { DispatchedVehicleWhereInputSchema } from './DispatchedVehicleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IncidentReadModelRelationFilterSchema } from './IncidentReadModelRelationFilterSchema';
import { IncidentReadModelWhereInputSchema } from './IncidentReadModelWhereInputSchema';
import { StaffInVehicleListRelationFilterSchema } from './StaffInVehicleListRelationFilterSchema';

export const DispatchedVehicleWhereUniqueInputSchema: z.ZodType<Prisma.DispatchedVehicleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    incidentId_vehicleId: z.lazy(() => DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    incidentId_vehicleId: z.lazy(() => DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  incidentId_vehicleId: z.lazy(() => DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => DispatchedVehicleWhereInputSchema), z.lazy(() => DispatchedVehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DispatchedVehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DispatchedVehicleWhereInputSchema), z.lazy(() => DispatchedVehicleWhereInputSchema).array() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  dispatchedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  returnedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  incident: z.union([ z.lazy(() => IncidentReadModelRelationFilterSchema), z.lazy(() => IncidentReadModelWhereInputSchema) ]).optional(),
  staffs: z.lazy(() => StaffInVehicleListRelationFilterSchema).optional(),
}));

export default DispatchedVehicleWhereUniqueInputSchema;
