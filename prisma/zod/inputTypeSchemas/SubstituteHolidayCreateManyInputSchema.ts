import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubstituteHolidayCreateManyInputSchema: z.ZodType<Prisma.SubstituteHolidayCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  originalHoliday: z.coerce.date(),
  substituteDate: z.coerce.date(),
  reason: z.string().optional(),
  decidedAt: z.coerce.date().optional(),
  decidedBy: z.string().optional().nullable(),
});

export default SubstituteHolidayCreateManyInputSchema;
