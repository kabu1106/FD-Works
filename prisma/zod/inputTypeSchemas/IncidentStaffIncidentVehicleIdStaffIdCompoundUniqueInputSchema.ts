import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema: z.ZodType<Prisma.IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInput> = z.strictObject({
  incidentVehicleId: z.string(),
  staffId: z.number(),
});

export default IncidentStaffIncidentVehicleIdStaffIdCompoundUniqueInputSchema;
