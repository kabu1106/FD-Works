import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema: z.ZodType<Prisma.IncidentVehicleIncidentIdVehicleIdCompoundUniqueInput> = z.strictObject({
  incidentId: z.string(),
  vehicleId: z.number(),
});

export default IncidentVehicleIncidentIdVehicleIdCompoundUniqueInputSchema;
