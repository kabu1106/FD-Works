import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DutyMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  isLocked: z.lazy(() => SortOrderSchema).optional(),
  lockedAt: z.lazy(() => SortOrderSchema).optional(),
  lockedByUserId: z.lazy(() => SortOrderSchema).optional(),
  hasEverCancelled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyMaxOrderByAggregateInputSchema;
