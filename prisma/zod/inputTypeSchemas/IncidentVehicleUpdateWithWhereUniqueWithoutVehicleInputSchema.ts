import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithoutVehicleInputSchema } from './IncidentVehicleUpdateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema';

export const IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema) ]),
});

export default IncidentVehicleUpdateWithWhereUniqueWithoutVehicleInputSchema;
