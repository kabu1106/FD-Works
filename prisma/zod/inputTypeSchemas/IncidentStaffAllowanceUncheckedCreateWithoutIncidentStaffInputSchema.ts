import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  allowanceTypeId: z.number().int(),
});

export default IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema;
