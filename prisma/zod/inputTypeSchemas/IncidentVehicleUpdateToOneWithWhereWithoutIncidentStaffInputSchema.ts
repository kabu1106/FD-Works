import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';
import { IncidentVehicleUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUpdateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema';

export const IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInputSchema;
