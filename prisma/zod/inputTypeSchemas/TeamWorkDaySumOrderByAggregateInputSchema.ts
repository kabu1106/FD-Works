import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeamWorkDaySumOrderByAggregateInputSchema: z.ZodType<Prisma.TeamWorkDaySumOrderByAggregateInput> = z.strictObject({
  teamId: z.lazy(() => SortOrderSchema).optional(),
});

export default TeamWorkDaySumOrderByAggregateInputSchema;
