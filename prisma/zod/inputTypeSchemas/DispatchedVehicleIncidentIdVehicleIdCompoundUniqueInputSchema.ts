import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema: z.ZodType<Prisma.DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInput> = z.strictObject({
  incidentId: z.string(),
  vehicleId: z.number(),
});

export default DispatchedVehicleIncidentIdVehicleIdCompoundUniqueInputSchema;
