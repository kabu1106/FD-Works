import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IncidentReadModelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IncidentReadModelAvgOrderByAggregateInput> = z.strictObject({
  locationId: z.lazy(() => SortOrderSchema).optional(),
});

export default IncidentReadModelAvgOrderByAggregateInputSchema;
