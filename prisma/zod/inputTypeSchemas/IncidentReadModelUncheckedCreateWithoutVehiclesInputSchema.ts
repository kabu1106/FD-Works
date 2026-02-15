import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentReadModelUncheckedCreateWithoutVehiclesInput> = z.strictObject({
  id: z.string(),
  dutyId: z.string(),
  locationId: z.number().int(),
  status: z.string(),
  occurredAt: z.coerce.date(),
  closedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
});

export default IncidentReadModelUncheckedCreateWithoutVehiclesInputSchema;
