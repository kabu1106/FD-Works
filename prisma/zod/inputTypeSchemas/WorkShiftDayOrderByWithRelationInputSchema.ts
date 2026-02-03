import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkShiftOrderByWithRelationInputSchema } from './WorkShiftOrderByWithRelationInputSchema';

export const WorkShiftDayOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkShiftDayOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
  workShift: z.lazy(() => WorkShiftOrderByWithRelationInputSchema).optional(),
});

export default WorkShiftDayOrderByWithRelationInputSchema;
