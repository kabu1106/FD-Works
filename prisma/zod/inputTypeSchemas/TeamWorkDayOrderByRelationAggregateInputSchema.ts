import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeamWorkDayOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamWorkDayOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TeamWorkDayOrderByRelationAggregateInputSchema;
