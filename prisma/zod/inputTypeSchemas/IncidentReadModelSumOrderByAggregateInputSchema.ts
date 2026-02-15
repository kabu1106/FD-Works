import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentReadModelSumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentReadModelSumOrderByAggregateInput> = z.strictObject({
  locationId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentReadModelSumOrderByAggregateInputSchema;
