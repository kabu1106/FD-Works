import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AttendanceEventCountOrderByAggregateInputSchema } from './AttendanceEventCountOrderByAggregateInputSchema';
import { AttendanceEventAvgOrderByAggregateInputSchema } from './AttendanceEventAvgOrderByAggregateInputSchema';
import { AttendanceEventMaxOrderByAggregateInputSchema } from './AttendanceEventMaxOrderByAggregateInputSchema';
import { AttendanceEventMinOrderByAggregateInputSchema } from './AttendanceEventMinOrderByAggregateInputSchema';
import { AttendanceEventSumOrderByAggregateInputSchema } from './AttendanceEventSumOrderByAggregateInputSchema';

export const AttendanceEventOrderByWithAggregationInputSchema: z.ZodType<Prisma.AttendanceEventOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AttendanceEventCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AttendanceEventAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AttendanceEventMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AttendanceEventMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AttendanceEventSumOrderByAggregateInputSchema).optional(),
});

export default AttendanceEventOrderByWithAggregationInputSchema;
