import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { VehicleCountOrderByAggregateInputSchema } from './VehicleCountOrderByAggregateInputSchema';
import { VehicleAvgOrderByAggregateInputSchema } from './VehicleAvgOrderByAggregateInputSchema';
import { VehicleMaxOrderByAggregateInputSchema } from './VehicleMaxOrderByAggregateInputSchema';
import { VehicleMinOrderByAggregateInputSchema } from './VehicleMinOrderByAggregateInputSchema';
import { VehicleSumOrderByAggregateInputSchema } from './VehicleSumOrderByAggregateInputSchema';

export const VehicleOrderByWithAggregationInputSchema: z.ZodType<Prisma.VehicleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VehicleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VehicleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VehicleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VehicleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VehicleSumOrderByAggregateInputSchema).optional(),
});

export default VehicleOrderByWithAggregationInputSchema;
