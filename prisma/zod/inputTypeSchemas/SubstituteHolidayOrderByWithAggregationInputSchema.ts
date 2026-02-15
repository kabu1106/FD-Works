import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SubstituteHolidayCountOrderByAggregateInputSchema } from './SubstituteHolidayCountOrderByAggregateInputSchema';
import { SubstituteHolidayAvgOrderByAggregateInputSchema } from './SubstituteHolidayAvgOrderByAggregateInputSchema';
import { SubstituteHolidayMaxOrderByAggregateInputSchema } from './SubstituteHolidayMaxOrderByAggregateInputSchema';
import { SubstituteHolidayMinOrderByAggregateInputSchema } from './SubstituteHolidayMinOrderByAggregateInputSchema';
import { SubstituteHolidaySumOrderByAggregateInputSchema } from './SubstituteHolidaySumOrderByAggregateInputSchema';

export const SubstituteHolidayOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubstituteHolidayOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  originalHoliday: z.lazy(() => SortOrderSchema).optional(),
  substituteDate: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => SubstituteHolidayCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubstituteHolidayAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubstituteHolidayMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubstituteHolidayMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubstituteHolidaySumOrderByAggregateInputSchema).optional(),
});

export default SubstituteHolidayOrderByWithAggregationInputSchema;
