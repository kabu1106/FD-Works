import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleCreateWithoutVehicleInputSchema } from './IncidentVehicleCreateWithoutVehicleInputSchema';
import { IncidentVehicleUncheckedCreateWithoutVehicleInputSchema } from './IncidentVehicleUncheckedCreateWithoutVehicleInputSchema';

export const IncidentVehicleCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleCreateOrConnectWithoutVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutVehicleInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutVehicleInputSchema) ]),
});

export default IncidentVehicleCreateOrConnectWithoutVehicleInputSchema;
