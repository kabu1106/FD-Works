import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentSumOrderByAggregateInput> = z.strictObject({
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  typeId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  destinationId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentSumOrderByAggregateInputSchema;
