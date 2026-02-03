import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
});

export default IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema;
