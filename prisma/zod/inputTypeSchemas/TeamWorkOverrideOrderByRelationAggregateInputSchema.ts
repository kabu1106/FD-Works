import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeamWorkOverrideOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamWorkOverrideOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TeamWorkOverrideOrderByRelationAggregateInputSchema;
