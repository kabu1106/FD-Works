import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkGroupAssignmentCountOrderByAggregateInputSchema } from './WorkGroupAssignmentCountOrderByAggregateInputSchema';
import { WorkGroupAssignmentAvgOrderByAggregateInputSchema } from './WorkGroupAssignmentAvgOrderByAggregateInputSchema';
import { WorkGroupAssignmentMaxOrderByAggregateInputSchema } from './WorkGroupAssignmentMaxOrderByAggregateInputSchema';
import { WorkGroupAssignmentMinOrderByAggregateInputSchema } from './WorkGroupAssignmentMinOrderByAggregateInputSchema';
import { WorkGroupAssignmentSumOrderByAggregateInputSchema } from './WorkGroupAssignmentSumOrderByAggregateInputSchema';

export const WorkGroupAssignmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkGroupAssignmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkGroupAssignmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorkGroupAssignmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkGroupAssignmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkGroupAssignmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorkGroupAssignmentSumOrderByAggregateInputSchema).optional(),
});

export default WorkGroupAssignmentOrderByWithAggregationInputSchema;
