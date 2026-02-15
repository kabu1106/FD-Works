import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateNestedManyWithoutIncidentInputSchema } from './DispatchedVehicleCreateNestedManyWithoutIncidentInputSchema';

export const IncidentReadModelCreateInputSchema: z.ZodType<Prisma.IncidentReadModelCreateInput> = z.strictObject({
  id: z.string(),
  dutyId: z.string(),
  locationId: z.number().int(),
  status: z.string(),
  occurredAt: z.coerce.date(),
  closedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => DispatchedVehicleCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentReadModelCreateInputSchema;
