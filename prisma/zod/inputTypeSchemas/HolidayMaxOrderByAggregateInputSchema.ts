import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HolidayMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HolidayMaxOrderByAggregateInput> = z.strictObject({
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
});

export default HolidayMaxOrderByAggregateInputSchema;
