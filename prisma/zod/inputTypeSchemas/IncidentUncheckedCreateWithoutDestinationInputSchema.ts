import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema';

export const IncidentUncheckedCreateWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentUncheckedCreateWithoutDestinationInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  typeId: z.number().int(),
  locationId: z.number().int(),
  destinationName: z.string().optional().nullable(),
  occurredAt: z.coerce.date(),
  status: z.lazy(() => IncidentStatusSchema),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentUncheckedCreateWithoutDestinationInputSchema;
