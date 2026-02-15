import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DispatchedVehicleOrderByRelationAggregateInputSchema } from './DispatchedVehicleOrderByRelationAggregateInputSchema';

export const IncidentReadModelOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentReadModelOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  closedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  vehicles: z.lazy(() => DispatchedVehicleOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentReadModelOrderByWithRelationInputSchema;
