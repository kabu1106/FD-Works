import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IncidentVehicleRelationFilterSchema } from './IncidentVehicleRelationFilterSchema';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { IncidentStaffAllowanceListRelationFilterSchema } from './IncidentStaffAllowanceListRelationFilterSchema';
import { IncidentAllowanceSummaryListRelationFilterSchema } from './IncidentAllowanceSummaryListRelationFilterSchema';

export const IncidentStaffWhereInputSchema: z.ZodType<Prisma.IncidentStaffWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffWhereInputSchema), z.lazy(() => IncidentStaffWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffWhereInputSchema), z.lazy(() => IncidentStaffWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentVehicleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  incidentVehicle: z.union([ z.lazy(() => IncidentVehicleRelationFilterSchema), z.lazy(() => IncidentVehicleWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceListRelationFilterSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryListRelationFilterSchema).optional(),
});

export default IncidentStaffWhereInputSchema;
