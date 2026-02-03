import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema } from './IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IncidentVehicleRelationFilterSchema } from './IncidentVehicleRelationFilterSchema';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { IncidentStaffAllowanceListRelationFilterSchema } from './IncidentStaffAllowanceListRelationFilterSchema';
import { IncidentAllowanceSummaryListRelationFilterSchema } from './IncidentAllowanceSummaryListRelationFilterSchema';

export const IncidentStaffWhereUniqueInputSchema: z.ZodType<Prisma.IncidentStaffWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    incidentVehicleId_staffId: z.lazy(() => IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    incidentVehicleId_staffId: z.lazy(() => IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  incidentVehicleId_staffId: z.lazy(() => IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => IncidentStaffWhereInputSchema), z.lazy(() => IncidentStaffWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffWhereInputSchema), z.lazy(() => IncidentStaffWhereInputSchema).array() ]).optional(),
  incidentVehicleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  incidentVehicle: z.union([ z.lazy(() => IncidentVehicleRelationFilterSchema), z.lazy(() => IncidentVehicleWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceListRelationFilterSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryListRelationFilterSchema).optional(),
}));

export default IncidentStaffWhereUniqueInputSchema;
