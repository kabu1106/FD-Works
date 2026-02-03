import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffCreateManyStaffInputSchema: z.ZodType<Prisma.IncidentStaffCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
});

export default IncidentStaffCreateManyStaffInputSchema;
