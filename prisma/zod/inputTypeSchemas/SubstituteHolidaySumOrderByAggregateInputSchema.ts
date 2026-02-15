import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubstituteHolidaySumOrderByAggregateInputSchema: z.ZodType<Prisma.SubstituteHolidaySumOrderByAggregateInput> = z.strictObject({
  staffId: z.lazy(() => SortOrderSchema).optional(),
});

export default SubstituteHolidaySumOrderByAggregateInputSchema;
