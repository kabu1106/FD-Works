import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AllowanceTypeCountOrderByAggregateInputSchema } from './AllowanceTypeCountOrderByAggregateInputSchema';
import { AllowanceTypeAvgOrderByAggregateInputSchema } from './AllowanceTypeAvgOrderByAggregateInputSchema';
import { AllowanceTypeMaxOrderByAggregateInputSchema } from './AllowanceTypeMaxOrderByAggregateInputSchema';
import { AllowanceTypeMinOrderByAggregateInputSchema } from './AllowanceTypeMinOrderByAggregateInputSchema';
import { AllowanceTypeSumOrderByAggregateInputSchema } from './AllowanceTypeSumOrderByAggregateInputSchema';

export const AllowanceTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.AllowanceTypeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  allowanceGroupId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AllowanceTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AllowanceTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AllowanceTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AllowanceTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AllowanceTypeSumOrderByAggregateInputSchema).optional(),
});

export default AllowanceTypeOrderByWithAggregationInputSchema;
