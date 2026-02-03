import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleCreateWithoutIncidentInputSchema } from './IncidentVehicleCreateWithoutIncidentInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentInputSchema';

export const IncidentVehicleCreateOrConnectWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleCreateOrConnectWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentVehicleCreateOrConnectWithoutIncidentInputSchema;
