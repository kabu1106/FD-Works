import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentVehicleOrderByWithRelationInputSchema } from './IncidentVehicleOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';
import { IncidentStaffAllowanceOrderByRelationAggregateInputSchema } from './IncidentStaffAllowanceOrderByRelationAggregateInputSchema';
import { IncidentAllowanceSummaryOrderByRelationAggregateInputSchema } from './IncidentAllowanceSummaryOrderByRelationAggregateInputSchema';

export const IncidentStaffOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentStaffOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentVehicleId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceOrderByRelationAggregateInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentStaffOrderByWithRelationInputSchema;
