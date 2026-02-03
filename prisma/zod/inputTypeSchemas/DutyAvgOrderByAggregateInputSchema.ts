import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DutyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DutyAvgOrderByAggregateInput> = z.strictObject({
  teamId: z.lazy(() => SortOrderSchema).optional(),
});

export default DutyAvgOrderByAggregateInputSchema;
