import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceCreateManyInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
  allowanceTypeId: z.number().int(),
});

export default IncidentStaffAllowanceCreateManyInputSchema;
