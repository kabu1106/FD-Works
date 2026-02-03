import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkGroupCountOrderByAggregateInputSchema } from './WorkGroupCountOrderByAggregateInputSchema';
import { WorkGroupAvgOrderByAggregateInputSchema } from './WorkGroupAvgOrderByAggregateInputSchema';
import { WorkGroupMaxOrderByAggregateInputSchema } from './WorkGroupMaxOrderByAggregateInputSchema';
import { WorkGroupMinOrderByAggregateInputSchema } from './WorkGroupMinOrderByAggregateInputSchema';
import { WorkGroupSumOrderByAggregateInputSchema } from './WorkGroupSumOrderByAggregateInputSchema';

export const WorkGroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkGroupOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkGroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorkGroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkGroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorkGroupSumOrderByAggregateInputSchema).optional(),
});

export default WorkGroupOrderByWithAggregationInputSchema;
