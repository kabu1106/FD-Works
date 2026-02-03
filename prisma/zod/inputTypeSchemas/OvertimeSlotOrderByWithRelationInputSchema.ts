import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OvertimeRateCategoryOrderByWithRelationInputSchema } from './OvertimeRateCategoryOrderByWithRelationInputSchema';
import { WorkGroupOrderByWithRelationInputSchema } from './WorkGroupOrderByWithRelationInputSchema';

export const OvertimeSlotOrderByWithRelationInputSchema: z.ZodType<Prisma.OvertimeSlotOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  workGroupId: z.lazy(() => SortOrderSchema).optional(),
  startMinute: z.lazy(() => SortOrderSchema).optional(),
  endMinute: z.lazy(() => SortOrderSchema).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  overtimeRateCategory: z.lazy(() => OvertimeRateCategoryOrderByWithRelationInputSchema).optional(),
  workGroup: z.lazy(() => WorkGroupOrderByWithRelationInputSchema).optional(),
});

export default OvertimeSlotOrderByWithRelationInputSchema;
