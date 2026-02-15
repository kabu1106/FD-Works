import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DutyOrderByWithRelationInputSchema } from './DutyOrderByWithRelationInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';

export const DutyDayTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.DutyDayTypeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  dayType: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  duty: z.lazy(() => DutyOrderByWithRelationInputSchema).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
});

export default DutyDayTypeOrderByWithRelationInputSchema;
