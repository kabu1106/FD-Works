import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyDayTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.DutyDayTypeSumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyDayTypeSumOrderByAggregateInputSchema;
