import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDutyIdStaffIdVersionCompoundUniqueInputSchema: z.ZodType<Prisma.OvertimeSummaryDutyIdStaffIdVersionCompoundUniqueInput> = z.strictObject({
  dutyId: z.string(),
  staffId: z.number(),
  version: z.number(),
});

export default OvertimeSummaryDutyIdStaffIdVersionCompoundUniqueInputSchema;
