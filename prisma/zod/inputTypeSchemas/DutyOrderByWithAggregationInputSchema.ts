import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DutyCountOrderByAggregateInputSchema } from './DutyCountOrderByAggregateInputSchema';
import { DutyAvgOrderByAggregateInputSchema } from './DutyAvgOrderByAggregateInputSchema';
import { DutyMaxOrderByAggregateInputSchema } from './DutyMaxOrderByAggregateInputSchema';
import { DutyMinOrderByAggregateInputSchema } from './DutyMinOrderByAggregateInputSchema';
import { DutySumOrderByAggregateInputSchema } from './DutySumOrderByAggregateInputSchema';

export const DutyOrderByWithAggregationInputSchema: z.ZodType<Prisma.DutyOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  isLocked: z.lazy(() => SortOrderSchema).optional(),
  lockedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  lockedByUserId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hasEverCancelled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DutyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DutyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DutyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DutyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DutySumOrderByAggregateInputSchema).optional(),
});

export default DutyOrderByWithAggregationInputSchema;
