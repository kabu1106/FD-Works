import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OvertimeSummaryOrderByWithRelationInputSchema } from './OvertimeSummaryOrderByWithRelationInputSchema';
import { OvertimeRateCategoryOrderByWithRelationInputSchema } from './OvertimeRateCategoryOrderByWithRelationInputSchema';

export const OvertimeSummaryDetailOrderByWithRelationInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  overtimeSummaryId: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.lazy(() => SortOrderSchema).optional(),
  rateSnapshot: z.lazy(() => SortOrderSchema).optional(),
  minutes: z.lazy(() => SortOrderSchema).optional(),
  overtimeSummary: z.lazy(() => OvertimeSummaryOrderByWithRelationInputSchema).optional(),
  rateCategory: z.lazy(() => OvertimeRateCategoryOrderByWithRelationInputSchema).optional(),
});

export default OvertimeSummaryDetailOrderByWithRelationInputSchema;
