import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateManyAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
});

export default IncidentStaffAllowanceCreateManyAllowanceTypeInputSchema;
