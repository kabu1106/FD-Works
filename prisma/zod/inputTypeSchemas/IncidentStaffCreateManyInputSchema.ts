import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffCreateManyInputSchema: z.ZodType<Prisma.IncidentStaffCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
  staffId: z.number().int(),
});

export default IncidentStaffCreateManyInputSchema;
