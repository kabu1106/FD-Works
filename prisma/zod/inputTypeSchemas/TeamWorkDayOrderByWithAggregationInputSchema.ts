import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamWorkDayCountOrderByAggregateInputSchema } from './TeamWorkDayCountOrderByAggregateInputSchema';
import { TeamWorkDayAvgOrderByAggregateInputSchema } from './TeamWorkDayAvgOrderByAggregateInputSchema';
import { TeamWorkDayMaxOrderByAggregateInputSchema } from './TeamWorkDayMaxOrderByAggregateInputSchema';
import { TeamWorkDayMinOrderByAggregateInputSchema } from './TeamWorkDayMinOrderByAggregateInputSchema';
import { TeamWorkDaySumOrderByAggregateInputSchema } from './TeamWorkDaySumOrderByAggregateInputSchema';

export const TeamWorkDayOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamWorkDayOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamWorkDayCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TeamWorkDayAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamWorkDayMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamWorkDayMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TeamWorkDaySumOrderByAggregateInputSchema).optional(),
});

export default TeamWorkDayOrderByWithAggregationInputSchema;
