import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamCountOrderByAggregateInputSchema } from './TeamCountOrderByAggregateInputSchema';
import { TeamAvgOrderByAggregateInputSchema } from './TeamAvgOrderByAggregateInputSchema';
import { TeamMaxOrderByAggregateInputSchema } from './TeamMaxOrderByAggregateInputSchema';
import { TeamMinOrderByAggregateInputSchema } from './TeamMinOrderByAggregateInputSchema';
import { TeamSumOrderByAggregateInputSchema } from './TeamSumOrderByAggregateInputSchema';

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  shiftType: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TeamAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TeamSumOrderByAggregateInputSchema).optional(),
});

export default TeamOrderByWithAggregationInputSchema;
