import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInput> = z.strictObject({
  incidentStaffId: z.string(),
  allowanceTypeId: z.number(),
});

export default IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema;
