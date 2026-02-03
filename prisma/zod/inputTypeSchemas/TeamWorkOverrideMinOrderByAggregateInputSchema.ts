import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeamWorkOverrideMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamWorkOverrideMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  teamWorkDayId: z.lazy(() => SortOrderSchema).optional(),
  overriddenType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TeamWorkOverrideMinOrderByAggregateInputSchema;
