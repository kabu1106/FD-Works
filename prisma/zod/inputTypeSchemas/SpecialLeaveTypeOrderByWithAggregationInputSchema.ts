import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpecialLeaveTypeCountOrderByAggregateInputSchema } from './SpecialLeaveTypeCountOrderByAggregateInputSchema';
import { SpecialLeaveTypeMaxOrderByAggregateInputSchema } from './SpecialLeaveTypeMaxOrderByAggregateInputSchema';
import { SpecialLeaveTypeMinOrderByAggregateInputSchema } from './SpecialLeaveTypeMinOrderByAggregateInputSchema';

export const SpecialLeaveTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.SpecialLeaveTypeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  specialLeaveGroupId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SpecialLeaveTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SpecialLeaveTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SpecialLeaveTypeMinOrderByAggregateInputSchema).optional(),
});

export default SpecialLeaveTypeOrderByWithAggregationInputSchema;
