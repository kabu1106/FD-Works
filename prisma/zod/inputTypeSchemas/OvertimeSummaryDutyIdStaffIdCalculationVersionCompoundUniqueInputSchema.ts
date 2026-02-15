import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema: z.ZodType<Prisma.OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInput> = z.strictObject({
  dutyId: z.string(),
  staffId: z.number(),
  calculationVersion: z.number(),
});

export default OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema;
