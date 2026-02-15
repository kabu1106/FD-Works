import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleWhereUniqueInputSchema } from './DispatchedVehicleWhereUniqueInputSchema';
import { DispatchedVehicleCreateWithoutIncidentInputSchema } from './DispatchedVehicleCreateWithoutIncidentInputSchema';
import { DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema } from './DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema';

export const DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleCreateOrConnectWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => DispatchedVehicleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DispatchedVehicleCreateWithoutIncidentInputSchema), z.lazy(() => DispatchedVehicleUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default DispatchedVehicleCreateOrConnectWithoutIncidentInputSchema;
