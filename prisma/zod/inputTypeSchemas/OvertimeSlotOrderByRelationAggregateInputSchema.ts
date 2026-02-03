import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OvertimeSlotOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OvertimeSlotOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OvertimeSlotOrderByRelationAggregateInputSchema;
