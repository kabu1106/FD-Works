import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpecialLeaveAssignmentCountOrderByAggregateInputSchema } from './SpecialLeaveAssignmentCountOrderByAggregateInputSchema';
import { SpecialLeaveAssignmentAvgOrderByAggregateInputSchema } from './SpecialLeaveAssignmentAvgOrderByAggregateInputSchema';
import { SpecialLeaveAssignmentMaxOrderByAggregateInputSchema } from './SpecialLeaveAssignmentMaxOrderByAggregateInputSchema';
import { SpecialLeaveAssignmentMinOrderByAggregateInputSchema } from './SpecialLeaveAssignmentMinOrderByAggregateInputSchema';
import { SpecialLeaveAssignmentSumOrderByAggregateInputSchema } from './SpecialLeaveAssignmentSumOrderByAggregateInputSchema';

export const SpecialLeaveAssignmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  specialLeaveTypeId: z.lazy(() => SortOrderSchema).optional(),
  baseDate: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SpecialLeaveAssignmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SpecialLeaveAssignmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SpecialLeaveAssignmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SpecialLeaveAssignmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SpecialLeaveAssignmentSumOrderByAggregateInputSchema).optional(),
});

export default SpecialLeaveAssignmentOrderByWithAggregationInputSchema;
