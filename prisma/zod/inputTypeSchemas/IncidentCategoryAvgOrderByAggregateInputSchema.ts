import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentCategoryAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentCategoryAvgOrderByAggregateInputSchema;
