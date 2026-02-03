import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DepartmentCountOrderByAggregateInputSchema } from './DepartmentCountOrderByAggregateInputSchema';
import { DepartmentAvgOrderByAggregateInputSchema } from './DepartmentAvgOrderByAggregateInputSchema';
import { DepartmentMaxOrderByAggregateInputSchema } from './DepartmentMaxOrderByAggregateInputSchema';
import { DepartmentMinOrderByAggregateInputSchema } from './DepartmentMinOrderByAggregateInputSchema';
import { DepartmentSumOrderByAggregateInputSchema } from './DepartmentSumOrderByAggregateInputSchema';

export const DepartmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  longitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DepartmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DepartmentSumOrderByAggregateInputSchema).optional(),
});

export default DepartmentOrderByWithAggregationInputSchema;
