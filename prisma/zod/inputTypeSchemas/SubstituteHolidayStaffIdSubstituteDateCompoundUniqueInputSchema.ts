import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema: z.ZodType<Prisma.SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInput> = z.strictObject({
  staffId: z.number(),
  substituteDate: z.coerce.date(),
});

export default SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema;
