import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StaffInVehicleCountOrderByAggregateInputSchema } from './StaffInVehicleCountOrderByAggregateInputSchema';
import { StaffInVehicleAvgOrderByAggregateInputSchema } from './StaffInVehicleAvgOrderByAggregateInputSchema';
import { StaffInVehicleMaxOrderByAggregateInputSchema } from './StaffInVehicleMaxOrderByAggregateInputSchema';
import { StaffInVehicleMinOrderByAggregateInputSchema } from './StaffInVehicleMinOrderByAggregateInputSchema';
import { StaffInVehicleSumOrderByAggregateInputSchema } from './StaffInVehicleSumOrderByAggregateInputSchema';

export const StaffInVehicleOrderByWithAggregationInputSchema: z.ZodType<Prisma.StaffInVehicleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dispatchedVehicleId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StaffInVehicleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StaffInVehicleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StaffInVehicleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StaffInVehicleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StaffInVehicleSumOrderByAggregateInputSchema).optional(),
});

export default StaffInVehicleOrderByWithAggregationInputSchema;
