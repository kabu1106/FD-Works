import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { StaffCountOrderByAggregateInputSchema } from './StaffCountOrderByAggregateInputSchema';
import { StaffAvgOrderByAggregateInputSchema } from './StaffAvgOrderByAggregateInputSchema';
import { StaffMaxOrderByAggregateInputSchema } from './StaffMaxOrderByAggregateInputSchema';
import { StaffMinOrderByAggregateInputSchema } from './StaffMinOrderByAggregateInputSchema';
import { StaffSumOrderByAggregateInputSchema } from './StaffSumOrderByAggregateInputSchema';

export const StaffOrderByWithAggregationInputSchema: z.ZodType<Prisma.StaffOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffNo: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  photoKey: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StaffCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StaffAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StaffMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StaffMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StaffSumOrderByAggregateInputSchema).optional(),
});

export default StaffOrderByWithAggregationInputSchema;
