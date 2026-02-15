import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutSubstituteHolidaysInputSchema } from './StaffCreateNestedOneWithoutSubstituteHolidaysInputSchema';

export const SubstituteHolidayCreateInputSchema: z.ZodType<Prisma.SubstituteHolidayCreateInput> = z.strictObject({
  id: z.string().optional(),
  originalHoliday: z.coerce.date(),
  substituteDate: z.coerce.date(),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutSubstituteHolidaysInputSchema),
});

export default SubstituteHolidayCreateInputSchema;
