import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StaffInVehicleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StaffInVehicleOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default StaffInVehicleOrderByRelationAggregateInputSchema;
