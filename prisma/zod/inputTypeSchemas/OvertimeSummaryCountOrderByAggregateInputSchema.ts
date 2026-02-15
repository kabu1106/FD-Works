import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSummaryCountOrderByAggregateInputSchema: z.ZodType<Prisma.OvertimeSummaryCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  calculationVersion: z.lazy(() => SortOrderSchema).optional(),
  totalMinutes: z.lazy(() => SortOrderSchema).optional(),
  isFinalized: z.lazy(() => SortOrderSchema).optional(),
  calculatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSummaryCountOrderByAggregateInputSchema;
