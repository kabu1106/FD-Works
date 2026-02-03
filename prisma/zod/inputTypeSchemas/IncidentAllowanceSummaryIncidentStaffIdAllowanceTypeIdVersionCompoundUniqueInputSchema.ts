import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInput> = z.strictObject({
  incidentStaffId: z.string(),
  allowanceTypeId: z.number(),
  version: z.number(),
});

export default IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema;
