import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OvertimeSlotOrderByRelationAggregateInputSchema } from './OvertimeSlotOrderByRelationAggregateInputSchema';
import { OvertimeSummaryDetailOrderByRelationAggregateInputSchema } from './OvertimeSummaryDetailOrderByRelationAggregateInputSchema';

export const OvertimeRateCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.OvertimeRateCategoryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotOrderByRelationAggregateInputSchema).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailOrderByRelationAggregateInputSchema).optional(),
});

export default OvertimeRateCategoryOrderByWithRelationInputSchema;
