import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleUpdateWithoutIncidentInputSchema } from './DispatchedVehicleUpdateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema';

export const DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DispatchedVehicleUpdateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema) ]),
});

export default DispatchedVehicleUpdateWithWhereUniqueWithoutIncidentInputSchema;
