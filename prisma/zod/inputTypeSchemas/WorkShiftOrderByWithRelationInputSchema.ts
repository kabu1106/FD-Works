import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeamOrderByRelationAggregateInputSchema } from './TeamOrderByRelationAggregateInputSchema';
import { WorkShiftDayOrderByRelationAggregateInputSchema } from './WorkShiftDayOrderByRelationAggregateInputSchema';

export const WorkShiftOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkShiftOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  shiftType: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  workShiftDays: z.lazy(() => WorkShiftDayOrderByRelationAggregateInputSchema).optional(),
});

export default WorkShiftOrderByWithRelationInputSchema;
