import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HospitalCountOrderByAggregateInputSchema } from './HospitalCountOrderByAggregateInputSchema';
import { HospitalAvgOrderByAggregateInputSchema } from './HospitalAvgOrderByAggregateInputSchema';
import { HospitalMaxOrderByAggregateInputSchema } from './HospitalMaxOrderByAggregateInputSchema';
import { HospitalMinOrderByAggregateInputSchema } from './HospitalMinOrderByAggregateInputSchema';
import { HospitalSumOrderByAggregateInputSchema } from './HospitalSumOrderByAggregateInputSchema';

export const HospitalOrderByWithAggregationInputSchema: z.ZodType<Prisma.HospitalOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  longitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => HospitalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HospitalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HospitalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HospitalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HospitalSumOrderByAggregateInputSchema).optional(),
});

export default HospitalOrderByWithAggregationInputSchema;
