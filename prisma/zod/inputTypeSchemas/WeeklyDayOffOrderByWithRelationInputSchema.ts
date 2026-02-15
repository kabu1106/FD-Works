import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';

export const WeeklyDayOffOrderByWithRelationInputSchema: z.ZodType<Prisma.WeeklyDayOffOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
});

export default WeeklyDayOffOrderByWithRelationInputSchema;
