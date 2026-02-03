import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffCreateManyIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffCreateManyIncidentVehicleInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
});

export default IncidentStaffCreateManyIncidentVehicleInputSchema;
