import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema } from './IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IncidentRelationFilterSchema } from './IncidentRelationFilterSchema';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';
import { VehicleRelationFilterSchema } from './VehicleRelationFilterSchema';
import { VehicleWhereInputSchema } from './VehicleWhereInputSchema';
import { IncidentStaffListRelationFilterSchema } from './IncidentStaffListRelationFilterSchema';

export const IncidentVehicleWhereUniqueInputSchema: z.ZodType<Prisma.IncidentVehicleWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    incidentId_vehicleId: z.lazy(() => IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    incidentId_vehicleId: z.lazy(() => IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  incidentId_vehicleId: z.lazy(() => IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => IncidentVehicleWhereInputSchema), z.lazy(() => IncidentVehicleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentVehicleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentVehicleWhereInputSchema), z.lazy(() => IncidentVehicleWhereInputSchema).array() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  dispatchTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  returnTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  incident: z.union([ z.lazy(() => IncidentRelationFilterSchema), z.lazy(() => IncidentWhereInputSchema) ]).optional(),
  vehicle: z.union([ z.lazy(() => VehicleRelationFilterSchema), z.lazy(() => VehicleWhereInputSchema) ]).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffListRelationFilterSchema).optional(),
}));

export default IncidentVehicleWhereUniqueInputSchema;
