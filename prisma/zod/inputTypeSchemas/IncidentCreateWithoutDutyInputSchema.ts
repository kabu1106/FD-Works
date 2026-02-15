import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { IncidentCategoryCreateNestedOneWithoutIncidentInputSchema } from './IncidentCategoryCreateNestedOneWithoutIncidentInputSchema';
import { IncidentTypeCreateNestedOneWithoutIncidentInputSchema } from './IncidentTypeCreateNestedOneWithoutIncidentInputSchema';
import { LocationCreateNestedOneWithoutIncidentsInputSchema } from './LocationCreateNestedOneWithoutIncidentsInputSchema';
import { HospitalCreateNestedOneWithoutDestinationInputSchema } from './HospitalCreateNestedOneWithoutDestinationInputSchema';
import { IncidentVehicleCreateNestedManyWithoutIncidentInputSchema } from './IncidentVehicleCreateNestedManyWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateNestedManyWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateNestedManyWithoutIncidentInputSchema';

export const IncidentCreateWithoutDutyInputSchema: z.ZodType<Prisma.IncidentCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  destinationName: z.string().optional().nullable(),
  occurredAt: z.coerce.date(),
  status: z.lazy(() => IncidentStatusSchema),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => IncidentCategoryCreateNestedOneWithoutIncidentInputSchema),
  type: z.lazy(() => IncidentTypeCreateNestedOneWithoutIncidentInputSchema),
  location: z.lazy(() => LocationCreateNestedOneWithoutIncidentsInputSchema),
  destination: z.lazy(() => HospitalCreateNestedOneWithoutDestinationInputSchema).optional(),
  vehicles: z.lazy(() => IncidentVehicleCreateNestedManyWithoutIncidentInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentCreateWithoutDutyInputSchema;
