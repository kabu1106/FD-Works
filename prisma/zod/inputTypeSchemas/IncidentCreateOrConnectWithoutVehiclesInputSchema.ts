import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutVehiclesInputSchema } from './IncidentCreateWithoutVehiclesInputSchema';
import { IncidentUncheckedCreateWithoutVehiclesInputSchema } from './IncidentUncheckedCreateWithoutVehiclesInputSchema';

export const IncidentCreateOrConnectWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutVehiclesInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutVehiclesInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutVehiclesInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutVehiclesInputSchema;
