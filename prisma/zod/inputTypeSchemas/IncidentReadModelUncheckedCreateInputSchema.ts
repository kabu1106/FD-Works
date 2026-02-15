import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema';

export const IncidentReadModelUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentReadModelUncheckedCreateInput> = z.strictObject({
  id: z.string(),
  dutyId: z.string(),
  locationId: z.number().int(),
  status: z.string(),
  occurredAt: z.coerce.date(),
  closedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => DispatchedVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentReadModelUncheckedCreateInputSchema;
