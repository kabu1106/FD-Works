import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutySumOrderByAggregateInputSchema: z.ZodType<Prisma.DutySumOrderByAggregateInput> = z.strictObject({
  teamId: z.lazy(() => SortOrderSchema).optional(),
});

export default DutySumOrderByAggregateInputSchema;
