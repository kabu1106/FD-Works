import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AttendanceCountOrderByAggregateInputSchema } from './AttendanceCountOrderByAggregateInputSchema';
import { AttendanceAvgOrderByAggregateInputSchema } from './AttendanceAvgOrderByAggregateInputSchema';
import { AttendanceMaxOrderByAggregateInputSchema } from './AttendanceMaxOrderByAggregateInputSchema';
import { AttendanceMinOrderByAggregateInputSchema } from './AttendanceMinOrderByAggregateInputSchema';
import { AttendanceSumOrderByAggregateInputSchema } from './AttendanceSumOrderByAggregateInputSchema';

export const AttendanceOrderByWithAggregationInputSchema: z.ZodType<Prisma.AttendanceOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AttendanceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AttendanceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AttendanceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AttendanceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AttendanceSumOrderByAggregateInputSchema).optional(),
});

export default AttendanceOrderByWithAggregationInputSchema;
