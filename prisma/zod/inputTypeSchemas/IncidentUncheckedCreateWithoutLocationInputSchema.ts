import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema';

export const IncidentUncheckedCreateWithoutLocationInputSchema: z.ZodType<Prisma.IncidentUncheckedCreateWithoutLocationInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  typeId: z.number().int(),
  destinationId: z.number().int().optional().nullable(),
  destinationName: z.string().optional().nullable(),
  occurredAt: z.coerce.date(),
  status: z.lazy(() => IncidentStatusSchema),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => IncidentVehicleUncheckedCreateNestedManyWithoutIncidentInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementUncheckedCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentUncheckedCreateWithoutLocationInputSchema;
