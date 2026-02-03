import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AllowanceGroupCountOrderByAggregateInputSchema } from './AllowanceGroupCountOrderByAggregateInputSchema';
import { AllowanceGroupAvgOrderByAggregateInputSchema } from './AllowanceGroupAvgOrderByAggregateInputSchema';
import { AllowanceGroupMaxOrderByAggregateInputSchema } from './AllowanceGroupMaxOrderByAggregateInputSchema';
import { AllowanceGroupMinOrderByAggregateInputSchema } from './AllowanceGroupMinOrderByAggregateInputSchema';
import { AllowanceGroupSumOrderByAggregateInputSchema } from './AllowanceGroupSumOrderByAggregateInputSchema';

export const AllowanceGroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.AllowanceGroupOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AllowanceGroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AllowanceGroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AllowanceGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AllowanceGroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AllowanceGroupSumOrderByAggregateInputSchema).optional(),
});

export default AllowanceGroupOrderByWithAggregationInputSchema;
