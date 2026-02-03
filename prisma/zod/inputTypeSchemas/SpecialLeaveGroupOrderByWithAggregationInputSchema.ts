import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpecialLeaveGroupCountOrderByAggregateInputSchema } from './SpecialLeaveGroupCountOrderByAggregateInputSchema';
import { SpecialLeaveGroupAvgOrderByAggregateInputSchema } from './SpecialLeaveGroupAvgOrderByAggregateInputSchema';
import { SpecialLeaveGroupMaxOrderByAggregateInputSchema } from './SpecialLeaveGroupMaxOrderByAggregateInputSchema';
import { SpecialLeaveGroupMinOrderByAggregateInputSchema } from './SpecialLeaveGroupMinOrderByAggregateInputSchema';
import { SpecialLeaveGroupSumOrderByAggregateInputSchema } from './SpecialLeaveGroupSumOrderByAggregateInputSchema';

export const SpecialLeaveGroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.SpecialLeaveGroupOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SpecialLeaveGroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SpecialLeaveGroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SpecialLeaveGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SpecialLeaveGroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SpecialLeaveGroupSumOrderByAggregateInputSchema).optional(),
});

export default SpecialLeaveGroupOrderByWithAggregationInputSchema;
