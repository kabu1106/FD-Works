import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
  allowanceTypeId: z.number().int(),
});

export default IncidentStaffAllowanceUncheckedCreateInputSchema;
