import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateWithoutIncidentInputSchema } from './IncidentVehicleUpdateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutIncidentInputSchema) ]),
});

export default IncidentVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema;
