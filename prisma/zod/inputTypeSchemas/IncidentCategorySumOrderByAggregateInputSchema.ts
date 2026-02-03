import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentCategorySumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentCategorySumOrderByAggregateInputSchema;
