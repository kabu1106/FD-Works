import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeamWorkDayAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TeamWorkDayAvgOrderByAggregateInput> = z.strictObject({
  teamId: z.lazy(() => SortOrderSchema).optional(),
});

export default TeamWorkDayAvgOrderByAggregateInputSchema;
