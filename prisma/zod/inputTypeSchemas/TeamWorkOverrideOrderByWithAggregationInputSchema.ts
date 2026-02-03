import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamWorkOverrideCountOrderByAggregateInputSchema } from './TeamWorkOverrideCountOrderByAggregateInputSchema';
import { TeamWorkOverrideMaxOrderByAggregateInputSchema } from './TeamWorkOverrideMaxOrderByAggregateInputSchema';
import { TeamWorkOverrideMinOrderByAggregateInputSchema } from './TeamWorkOverrideMinOrderByAggregateInputSchema';

export const TeamWorkOverrideOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamWorkOverrideOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  teamWorkDayId: z.lazy(() => SortOrderSchema).optional(),
  overriddenType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamWorkOverrideCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamWorkOverrideMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamWorkOverrideMinOrderByAggregateInputSchema).optional(),
});

export default TeamWorkOverrideOrderByWithAggregationInputSchema;
