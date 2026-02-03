import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentStaffCountOrderByAggregateInputSchema } from './IncidentStaffCountOrderByAggregateInputSchema';
import { IncidentStaffAvgOrderByAggregateInputSchema } from './IncidentStaffAvgOrderByAggregateInputSchema';
import { IncidentStaffMaxOrderByAggregateInputSchema } from './IncidentStaffMaxOrderByAggregateInputSchema';
import { IncidentStaffMinOrderByAggregateInputSchema } from './IncidentStaffMinOrderByAggregateInputSchema';
import { IncidentStaffSumOrderByAggregateInputSchema } from './IncidentStaffSumOrderByAggregateInputSchema';

export const IncidentStaffOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentStaffOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentVehicleId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentStaffCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentStaffAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentStaffMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentStaffMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentStaffSumOrderByAggregateInputSchema).optional(),
});

export default IncidentStaffOrderByWithAggregationInputSchema;
