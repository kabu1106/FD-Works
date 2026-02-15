import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DutyOrderByWithRelationInputSchema } from './DutyOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';

export const AttendanceEventOrderByWithRelationInputSchema: z.ZodType<Prisma.AttendanceEventOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  occurredAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  duty: z.lazy(() => DutyOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
});

export default AttendanceEventOrderByWithRelationInputSchema;
