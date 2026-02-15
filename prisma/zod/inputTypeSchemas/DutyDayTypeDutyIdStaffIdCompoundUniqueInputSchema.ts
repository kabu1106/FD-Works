import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema: z.ZodType<Prisma.DutyDayTypeDutyIdStaffIdCompoundUniqueInput> = z.strictObject({
  dutyId: z.string(),
  staffId: z.number(),
});

export default DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema;
