import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HolidayCountOrderByAggregateInputSchema } from './HolidayCountOrderByAggregateInputSchema';
import { HolidayMaxOrderByAggregateInputSchema } from './HolidayMaxOrderByAggregateInputSchema';
import { HolidayMinOrderByAggregateInputSchema } from './HolidayMinOrderByAggregateInputSchema';

export const HolidayOrderByWithAggregationInputSchema: z.ZodType<Prisma.HolidayOrderByWithAggregationInput> = z.strictObject({
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HolidayCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HolidayMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HolidayMinOrderByAggregateInputSchema).optional(),
});

export default HolidayOrderByWithAggregationInputSchema;
