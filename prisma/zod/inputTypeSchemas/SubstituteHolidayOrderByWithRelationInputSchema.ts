import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema';

export const SubstituteHolidayOrderByWithRelationInputSchema: z.ZodType<Prisma.SubstituteHolidayOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffId: z.lazy(() => SortOrderSchema).optional(),
  originalHoliday: z.lazy(() => SortOrderSchema).optional(),
  substituteDate: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  decidedAt: z.lazy(() => SortOrderSchema).optional(),
  decidedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  staff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
});

export default SubstituteHolidayOrderByWithRelationInputSchema;
