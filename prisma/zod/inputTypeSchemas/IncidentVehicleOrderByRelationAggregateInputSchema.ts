import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentVehicleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IncidentVehicleOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentVehicleOrderByRelationAggregateInputSchema;
