import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSlotMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSlotMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
  startMinute: z.lazy(() => SortOrderSchema).optional(),
  endMinute: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSlotMaxOrderByAggregateInputSchema;
