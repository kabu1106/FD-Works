import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { IncidentVehicleCountOrderByAggregateInputSchema } from './IncidentVehicleCountOrderByAggregateInputSchema';
import { IncidentVehicleAvgOrderByAggregateInputSchema } from './IncidentVehicleAvgOrderByAggregateInputSchema';
import { IncidentVehicleMaxOrderByAggregateInputSchema } from './IncidentVehicleMaxOrderByAggregateInputSchema';
import { IncidentVehicleMinOrderByAggregateInputSchema } from './IncidentVehicleMinOrderByAggregateInputSchema';
import { IncidentVehicleSumOrderByAggregateInputSchema } from './IncidentVehicleSumOrderByAggregateInputSchema';

export const IncidentVehicleOrderByWithAggregationInputSchema: z.ZodType<Prisma.IncidentVehicleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  incidentId: z.lazy(() => SortOrderSchema).optional(),
  vehicleId: z.lazy(() => SortOrderSchema).optional(),
  dispatchTime: z.lazy(() => SortOrderSchema).optional(),
  returnTime: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IncidentVehicleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IncidentVehicleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IncidentVehicleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IncidentVehicleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IncidentVehicleSumOrderByAggregateInputSchema).optional(),
});

export default IncidentVehicleOrderByWithAggregationInputSchema;
