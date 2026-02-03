import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithoutIncidentVehicleInputSchema } from './IncidentStaffUpdateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema';

export const IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffUpdateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema) ]),
});

export default IncidentStaffUpdateWithWhereUniqueWithoutIncidentVehicleInputSchema;
