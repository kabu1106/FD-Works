import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceCreateManyIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  allowanceTypeId: z.number().int(),
});

export default IncidentStaffAllowanceCreateManyIncidentStaffInputSchema;
