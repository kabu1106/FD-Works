import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubstituteHolidayCreateWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  originalHoliday: z.coerce.date(),
  substituteDate: z.coerce.date(),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
});

export default SubstituteHolidayCreateWithoutStaffInputSchema;
