import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema: z.ZodType<Prisma.SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInput> = z.strictObject({
  staffId: z.number(),
  originalHoliday: z.coerce.date(),
});

export default SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema;
