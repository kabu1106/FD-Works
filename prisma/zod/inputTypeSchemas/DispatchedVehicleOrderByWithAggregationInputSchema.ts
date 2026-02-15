import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DispatchedVehicleCountOrderByAggregateInputSchema } from './DispatchedVehicleCountOrderByAggregateInputSchema';
import { DispatchedVehicleAvgOrderByAggregateInputSchema } from './DispatchedVehicleAvgOrderByAggregateInputSchema';
import { DispatchedVehicleMaxOrderByAggregateInputSchema } from './DispatchedVehicleMaxOrderByAggregateInputSchema';
import { DispatchedVehicleMinOrderByAggregateInputSchema } from './DispatchedVehicleMinOrderByAggregateInputSchema';
import { DispatchedVehicleSumOrderByAggregateInputSchema } from './DispatchedVehicleSumOrderByAggregateInputSchema';

export const DispatchedVehicleOrderByWithAggregationInputSchema: z.ZodType<Prisma.DispatchedVehicleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchedAt: z.lazy(() => SortOrderSchema).optional(),
  returnedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DispatchedVehicleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DispatchedVehicleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DispatchedVehicleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DispatchedVehicleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DispatchedVehicleSumOrderByAggregateInputSchema).optional(),
});

export default DispatchedVehicleOrderByWithAggregationInputSchema;
