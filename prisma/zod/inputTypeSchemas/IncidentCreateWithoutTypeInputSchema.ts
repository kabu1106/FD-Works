import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateNestedOneWithoutIncidentsInputSchema } from './DutyCreateNestedOneWithoutIncidentsInputSchema';
import { IncidentCategoryCreateNestedOneWithoutIncidentInputSchema } from './IncidentCategoryCreateNestedOneWithoutIncidentInputSchema';
import { LocationCreateNestedOneWithoutIncidentsInputSchema } from './LocationCreateNestedOneWithoutIncidentsInputSchema';
import { HospitalCreateNestedOneWithoutDestinationInputSchema } from './HospitalCreateNestedOneWithoutDestinationInputSchema';
import { IncidentVehicleCreateNestedManyWithoutIncidentInputSchema } from './IncidentVehicleCreateNestedManyWithoutIncidentInputSchema';

export const IncidentCreateWithoutTypeInputSchema: z.ZodType<Prisma.IncidentCreateWithoutTypeInput> = z.strictObject({
  id: z.string().optional(),
  destinationName: z.string().optional().nullable(),
  isDeleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutIncidentsInputSchema),
  category: z.lazy(() => IncidentCategoryCreateNestedOneWithoutIncidentInputSchema),
  location: z.lazy(() => LocationCreateNestedOneWithoutIncidentsInputSchema),
  destination: z.lazy(() => HospitalCreateNestedOneWithoutDestinationInputSchema).optional(),
  vehicles: z.lazy(() => IncidentVehicleCreateNestedManyWithoutIncidentInputSchema).optional(),
});

export default IncidentCreateWithoutTypeInputSchema;
