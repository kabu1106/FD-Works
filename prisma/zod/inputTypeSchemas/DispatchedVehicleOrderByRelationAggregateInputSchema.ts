import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DispatchedVehicleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DispatchedVehicleOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default DispatchedVehicleOrderByRelationAggregateInputSchema;
