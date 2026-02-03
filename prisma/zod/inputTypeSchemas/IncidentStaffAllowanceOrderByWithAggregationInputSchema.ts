import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentStaffAllowanceCountOrderByAggregateInputSchema } from './IncidentStaffAllowanceCountOrderByAggregateInputSchema';
import { IncidentStaffAllowanceAvgOrderByAggregateInputSchema } from './IncidentStaffAllowanceAvgOrderByAggregateInputSchema';
import { IncidentStaffAllowanceMaxOrderByAggregateInputSchema } from './IncidentStaffAllowanceMaxOrderByAggregateInputSchema';
import { IncidentStaffAllowanceMinOrderByAggregateInputSchema } from './IncidentStaffAllowanceMinOrderByAggregateInputSchema';
import { IncidentStaffAllowanceSumOrderByAggregateInputSchema } from './IncidentStaffAllowanceSumOrderByAggregateInputSchema';

export const IncidentStaffAllowanceOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentStaffId: z.lazy(() => SortOrderSchema).optional(),
  allowanceTypeId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentStaffAllowanceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentStaffAllowanceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentStaffAllowanceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentStaffAllowanceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentStaffAllowanceSumOrderByAggregateInputSchema).optional(),
});

export default IncidentStaffAllowanceOrderByWithAggregationInputSchema;
