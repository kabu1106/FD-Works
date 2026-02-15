import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DutyDayTypeCountOrderByAggregateInputSchema } from './DutyDayTypeCountOrderByAggregateInputSchema';
import { DutyDayTypeAvgOrderByAggregateInputSchema } from './DutyDayTypeAvgOrderByAggregateInputSchema';
import { DutyDayTypeMaxOrderByAggregateInputSchema } from './DutyDayTypeMaxOrderByAggregateInputSchema';
import { DutyDayTypeMinOrderByAggregateInputSchema } from './DutyDayTypeMinOrderByAggregateInputSchema';
import { DutyDayTypeSumOrderByAggregateInputSchema } from './DutyDayTypeSumOrderByAggregateInputSchema';

export const DutyDayTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.DutyDayTypeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  dayType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DutyDayTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DutyDayTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DutyDayTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DutyDayTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DutyDayTypeSumOrderByAggregateInputSchema).optional(),
});

export default DutyDayTypeOrderByWithAggregationInputSchema;
